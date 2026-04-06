import { createContext, useContext, useState, useCallback } from 'react';

const KEY = 'testforge_progress';

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch { return {}; }
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [done, setDone] = useState(load);

  const toggle = useCallback((key) => {
    setDone(prev => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = 1;
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isDone = useCallback((key) => !!done[key], [done]);

  return (
    <ProgressContext.Provider value={{ isDone, toggle, done }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
