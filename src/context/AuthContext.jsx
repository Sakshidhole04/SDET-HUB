import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const SESSION_KEY = 'testforge_user';
const SESSION_TTL = 60 * 60 * 1000; // 1 hour

// ── Welcome email via Supabase Edge Function + Resend ───────────────────────
async function sendWelcomeEmail(supabaseClient, name, email) {
  try {
    await supabaseClient.functions.invoke('send-welcome-email', {
      body: { name, email },
    });
  } catch (e) {
    console.warn('Welcome email could not be sent:', e);
  }
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (session?.loginAt && Date.now() - session.loginAt > SESSION_TTL) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return session || null;
  } catch { return null; }
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadSession);

  // Auto-expire session every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return;
      try {
        const session = JSON.parse(raw);
        if (session?.loginAt && Date.now() - session.loginAt > SESSION_TTL) {
          localStorage.removeItem(SESSION_KEY);
          setUser(null);
        }
      } catch {}
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const signup = useCallback(async (name, email, password) => {
    const normalEmail = email.toLowerCase().trim();

    // Check duplicate
    const { data: existing } = await supabase
      .from('users')
      .select('email')
      .eq('email', normalEmail)
      .maybeSingle();

    if (existing) return { error: 'An account with this email already exists.' };

    const { error } = await supabase
      .from('users')
      .insert({ name: name.trim(), email: normalEmail, password });

    if (error) return { error: 'Failed to create account. Please try again.' };

    // Send welcome email via Supabase Edge Function (non-blocking)
    sendWelcomeEmail(supabase, name.trim(), normalEmail);

    // Do NOT auto-login — user must log in manually
    return { success: true };
  }, []);

  const login = useCallback(async (email, password) => {
    const normalEmail = email.toLowerCase().trim();

    const { data: found } = await supabase
      .from('users')
      .select('name, email, mobile')
      .eq('email', normalEmail)
      .eq('password', password)
      .maybeSingle();

    if (!found) return { error: 'Invalid email or password.' };

    const session = {
      name: found.name,
      email: found.email,
      mobile: found.mobile || '',
      loginAt: Date.now(),
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem('testforge_progress');
    setUser(null);
  }, []);

  const updateName = useCallback(async (newName) => {
    if (!user) return { error: 'Not logged in.' };
    const { error } = await supabase
      .from('users')
      .update({ name: newName })
      .eq('email', user.email);
    if (error) return { error: 'Failed to update name.' };
    const session = { ...user, name: newName };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }, [user]);

  const updateMobile = useCallback(async (mobile) => {
    if (!user) return { error: 'Not logged in.' };
    const { error } = await supabase
      .from('users')
      .update({ mobile })
      .eq('email', user.email);
    if (error) return { error: 'Failed to update mobile number.' };
    const session = { ...user, mobile };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateName, updateMobile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

