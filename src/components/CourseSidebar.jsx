import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

export default function CourseSidebar({ courses, baseRoute, prefix, title }) {
  const { chapterId, lessonId } = useParams();
  const navigate = useNavigate();
  const { isDone } = useProgress();
  const [expanded, setExpanded] = useState(() => chapterId ? { [chapterId]: true } : {});

  useEffect(() => {
    if (chapterId) setExpanded(p => ({ ...p, [chapterId]: true }));
  }, [chapterId]);

  const toggleExpand = (key) => setExpanded(p => ({ ...p, [key]: !p[key] }));

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-title">{title}</span>
      </div>
      <nav>
        {Object.entries(courses).map(([key, chapter]) => {
          const total = chapter.subtopics.length;
          const completed = chapter.subtopics.filter(s => isDone(`${prefix}-${key}-${s.id}`)).length;
          return (
            <div key={key}>
              <button
                className={`sidebar-topic ${chapterId === key ? 'active' : ''}`}
                onClick={() => {
                  toggleExpand(key);
                  if (!chapterId || chapterId !== key) navigate(`${baseRoute}/${key}/1`);
                }}
              >
                <span className="topic-icon">{chapter.icon}</span>
                <span>{chapter.title}</span>
                {completed === total ? (
                  <span className="topic-done-badge">✓</span>
                ) : completed > 0 ? (
                  <span className="topic-progress-txt">{completed}/{total}</span>
                ) : null}
                <span className="chevron">{expanded[key] ? '▾' : '▶'}</span>
              </button>
              {expanded[key] && chapterId === key && (
                <ul className="subtopic-list">
                  {chapter.subtopics.map(sub => {
                    const subDone = isDone(`${prefix}-${key}-${sub.id}`);
                    return (
                      <li key={sub.id}>
                        <Link
                          to={`${baseRoute}/${key}/${sub.id}`}
                          className={`subtopic-link ${parseInt(lessonId) === sub.id ? 'active' : ''}`}
                        >
                          <span className={`sub-num${subDone ? ' sub-done' : ''}`}>{subDone ? '✓' : sub.id}</span>
                          {sub.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
