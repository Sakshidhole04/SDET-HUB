import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { topics } from '../data/topics';
import { useProgress } from '../context/ProgressContext';

export default function Sidebar() {
  const { topicKey, subtopicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isPractice = location.pathname === '/practice';
  const { isDone } = useProgress();
  const [expanded, setExpanded] = useState(() => topicKey ? { [topicKey]: true } : {});

  useEffect(() => {
    if (topicKey) setExpanded(p => ({ ...p, [topicKey]: true }));
  }, [topicKey]);

  const toggleExpand = (key) => setExpanded(p => ({ ...p, [key]: !p[key] }));

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-title">SDET</span>
      </div>
      <nav>
        {Object.entries(topics).map(([key, topic]) => {
          const total = topic.subtopics.length;
          const completed = topic.subtopics.filter(s => isDone(`sdet-${key}-${s.id}`)).length;
          return (
          <div key={key}>
            <button
              className={`sidebar-topic ${topicKey === key ? 'active' : ''}`}
              onClick={() => {
                toggleExpand(key);
                if (!topicKey || topicKey !== key) navigate(`/topic/${key}/1`);
              }}
            >
              <span className="topic-icon">{topic.icon}</span>
              <span>{topic.title}</span>
              {completed === total ? (
                <span className="topic-done-badge">✓</span>
              ) : completed > 0 ? (
                <span className="topic-progress-txt">{completed}/{total}</span>
              ) : null}
              <span className="chevron">{expanded[key] ? '▾' : '▶'}</span>
            </button>
            {expanded[key] && topicKey === key && (
              <ul className="subtopic-list">
                {topic.subtopics.map(sub => {
                  const subDone = isDone(`sdet-${key}-${sub.id}`);
                  return (
                  <li key={sub.id}>
                    <Link
                      to={`/topic/${key}/${sub.id}`}
                      className={`subtopic-link ${parseInt(subtopicId) === sub.id ? 'active' : ''}`}
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
      <div style={{ borderTop: '1px solid var(--border)', marginTop: 8 }}>
        <Link
          to="/practice"
          className={`sidebar-practice-link ${isPractice ? 'active' : ''}`}
        >
          <span style={{ fontSize: 16 }}>🧩</span>
          <span>Practice Editor</span>
        </Link>
      </div>
    </aside>
  );
}
