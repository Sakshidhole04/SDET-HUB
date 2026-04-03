import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { javaCourses } from '../data/javaData';

export default function JavaSidebar() {
  const { chapterId, lessonId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isEditor = location.pathname === '/java/editor';
  const [expanded, setExpanded] = useState(() => chapterId ? { [chapterId]: true } : {});

  useEffect(() => {
    if (chapterId) setExpanded(p => ({ ...p, [chapterId]: true }));
  }, [chapterId]);

  const toggleExpand = (key) => setExpanded(p => ({ ...p, [key]: !p[key] }));

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-title">☕ Java</span>
      </div>
      <nav>
        <Link
          to="/java/editor"
          className={`sidebar-editor-link${isEditor ? ' active' : ''}`}
        >
          <span>💻</span>
          <span>Code Editor</span>
        </Link>
        {Object.entries(javaCourses).map(([key, chapter]) => (
          <div key={key}>
            <button
              className={`sidebar-topic ${chapterId === key ? 'active' : ''}`}
              onClick={() => {
                toggleExpand(key);
                if (!chapterId || chapterId !== key) navigate(`/java/${key}/1`);
              }}
            >
              <span className="topic-icon">{chapter.icon}</span>
              <span>{chapter.title}</span>
              <span className="chevron">{expanded[key] ? '▾' : '▶'}</span>
            </button>
            {expanded[key] && chapterId === key && (
              <ul className="subtopic-list">
                {chapter.subtopics.map(sub => (
                  <li key={sub.id}>
                    <Link
                      to={`/java/${key}/${sub.id}`}
                      className={`subtopic-link ${parseInt(lessonId) === sub.id ? 'active' : ''}`}
                    >
                      <span className="sub-num">{sub.id}</span>
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
