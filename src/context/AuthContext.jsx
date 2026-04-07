import { createContext, useContext, useState, useCallback } from 'react';

const KEY = 'testforge_user';

function loadUser() {
  try { return JSON.parse(localStorage.getItem(KEY)) || null; }
  catch { return null; }
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser);

  // users stored as { name, email, password } array
  const USERS_KEY = 'testforge_users';
  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch { return []; }
  }
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  const signup = useCallback((name, email, password) => {
    const users = getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { error: 'An account with this email already exists.' };
    }
    const newUser = { name, email: email.toLowerCase(), password };
    saveUsers([...users, newUser]);
    const session = { name, email: email.toLowerCase() };
    localStorage.setItem(KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }, []);

  const login = useCallback((email, password) => {
    const users = getUsers();
    const found = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) return { error: 'Invalid email or password.' };
    const session = { name: found.name, email: found.email };
    localStorage.setItem(KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
