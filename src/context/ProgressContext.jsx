import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const LOCAL_KEY = 'testforge_progress';

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {}; }
  catch { return {}; }
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [done, setDone] = useState(loadLocal);

  // Sync from Supabase when user logs in or changes
  useEffect(() => {
    if (!user) {
      setDone({});
      localStorage.removeItem(LOCAL_KEY);
      return;
    }
    supabase
      .from('progress')
      .select('lesson_key')
      .eq('email', user.email)
      .then(({ data }) => {
        if (data) {
          const progress = {};
          data.forEach(row => { progress[row.lesson_key] = 1; });
          localStorage.setItem(LOCAL_KEY, JSON.stringify(progress));
          setDone(progress);
        }
      });
  }, [user?.email]);

  const toggle = useCallback((key) => {
    setDone(prev => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
        if (user) {
          supabase.from('progress').delete()
            .eq('email', user.email).eq('lesson_key', key);
        }
      } else {
        next[key] = 1;
        if (user) {
          supabase.from('progress').upsert({ email: user.email, lesson_key: key });
        }
      }
      localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
      return next;
    });
  }, [user]);

  const isDone = useCallback((key) => !!done[key], [done]);

  return (
    <ProgressContext.Provider value={{ isDone, toggle, done }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);

