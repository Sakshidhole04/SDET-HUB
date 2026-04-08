import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const BOOKMARKS_KEY = 'testforge_bookmarks';
const RECENT_KEY    = 'testforge_recent';
const DARK_KEY      = 'testforge_dark';
const MAX_RECENT    = 10;

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}

const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => load(BOOKMARKS_KEY, []));
  const [recent,    setRecent]    = useState(() => load(RECENT_KEY, []));
  const [dark,      setDark]      = useState(() => load(DARK_KEY, false));

  // Apply dark mode class to <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem(DARK_KEY, JSON.stringify(dark));
  }, [dark]);

  const toggleDark = useCallback(() => setDark(d => !d), []);

  // Bookmark helpers
  const isBookmarked = useCallback((route) => bookmarks.some(b => b.route === route), [bookmarks]);

  const toggleBookmark = useCallback((item) => {
    // item: { route, title, course, icon }
    setBookmarks(prev => {
      const exists = prev.some(b => b.route === item.route);
      const next = exists ? prev.filter(b => b.route !== item.route) : [item, ...prev];
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  // Recently viewed tracker
  const trackRecent = useCallback((item) => {
    // item: { route, title, course, icon }
    setRecent(prev => {
      const filtered = prev.filter(r => r.route !== item.route);
      const next = [{ ...item, visitedAt: Date.now() }, ...filtered].slice(0, MAX_RECENT);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <BookmarkContext.Provider value={{ bookmarks, recent, dark, toggleDark, isBookmarked, toggleBookmark, trackRecent }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => useContext(BookmarkContext);
