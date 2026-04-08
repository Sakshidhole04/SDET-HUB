import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { topics } from '../data/topics';
import { javaCourses } from '../data/javaData';
import { pythonCourses } from '../data/pythonData';
import { sqlCourses } from '../data/sqlData';

// Build a flat searchable index once
function buildIndex() {
  const index = [];

  // SDET topics
  Object.entries(topics).forEach(([key, topic]) => {
    topic.subtopics?.forEach(sub => {
      index.push({
        route: `/topic/${key}/${sub.id}`,
        title: sub.title,
        course: 'SDET',
        section: topic.title,
        icon: '✏️',
        color: '#7c3aed',
      });
    });
  });

  // Java
  Object.entries(javaCourses).forEach(([chapterId, chapter]) => {
    chapter.subtopics?.forEach(sub => {
      index.push({
        route: `/java/${chapterId}/${sub.id}`,
        title: sub.title,
        course: 'Java',
        section: chapter.title,
        icon: '☕',
        color: '#f59e0b',
      });
    });
  });

  // Python
  Object.entries(pythonCourses).forEach(([chapterId, chapter]) => {
    chapter.subtopics?.forEach(sub => {
      index.push({
        route: `/python/${chapterId}/${sub.id}`,
        title: sub.title,
        course: 'Python',
        section: chapter.title,
        icon: '🐍',
        color: '#10b981',
      });
    });
  });

  // SQL
  Object.entries(sqlCourses).forEach(([chapterId, chapter]) => {
    chapter.subtopics?.forEach(sub => {
      index.push({
        route: `/sql/${chapterId}/${sub.id}`,
        title: sub.title,
        course: 'SQL',
        section: chapter.title,
        icon: '🗄️',
        color: '#06b6d4',
      });
    });
  });

  return index;
}

const INDEX = buildIndex();

export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return INDEX.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.section.toLowerCase().includes(q) ||
      item.course.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  useEffect(() => { setSelected(0); }, [results]);

  function handleKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
    if (e.key === 'Enter' && results[selected]) { go(results[selected]); }
  }

  function go(item) {
    navigate(item.route);
    onClose();
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search lessons, topics, courses…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
          />
          <kbd className="search-esc" onClick={onClose}>Esc</kbd>
        </div>

        {results.length > 0 && (
          <div className="search-results">
            {results.map((r, i) => (
              <div
                key={r.route}
                className={`search-result${i === selected ? ' selected' : ''}`}
                onClick={() => go(r)}
                onMouseEnter={() => setSelected(i)}
              >
                <span className="sr-icon">{r.icon}</span>
                <div className="sr-info">
                  <span className="sr-title">{r.title}</span>
                  <span className="sr-meta">{r.course} › {r.section}</span>
                </div>
                <span className="sr-arrow">→</span>
              </div>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="search-empty">No results for "<strong>{query}</strong>"</div>
        )}

        {!query && (
          <div className="search-hint">
            <span>Type to search 500+ lessons across all courses</span>
            <div className="search-hint-keys">
              <kbd>↑↓</kbd> navigate &nbsp; <kbd>Enter</kbd> open &nbsp; <kbd>Esc</kbd> close
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
