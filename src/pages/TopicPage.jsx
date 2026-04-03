import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/topics';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from '../components/CodeBlock';
import { useProgress } from '../context/ProgressContext';

function readTime(text) {
  return Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));
}

export default function TopicPage() {
  const { topicKey, subtopicId } = useParams();
  const navigate = useNavigate();
  const { isDone, toggle } = useProgress();
  const [openExercises, setOpenExercises] = useState({});
  const [showTop, setShowTop] = useState(false);

  const topic = topics[topicKey];
  if (!topic) return <div className="not-found">Topic not found</div>;

  const currentId = parseInt(subtopicId);
  const subtopic = topic.subtopics.find(s => s.id === currentId);
  if (!subtopic) return <div className="not-found">Subtopic not found</div>;

  const prevSub = topic.subtopics.find(s => s.id === currentId - 1);
  const nextSub = topic.subtopics.find(s => s.id === currentId + 1);
  const lessonKey = `sdet-${topicKey}-${currentId}`;
  const done = isDone(lessonKey);
  const mins = readTime(subtopic.content);

  const toggleExercise = (i) => setOpenExercises(p => ({ ...p, [i]: !p[i] }));

  useEffect(() => {
    const el = document.querySelector('.main-content');
    if (!el) return;
    const handler = () => setShowTop(el.scrollTop > 320);
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, [subtopicId]);

  const scrollTop = () => document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="topic-page">
      <div className="topic-breadcrumb">
        <span>{topic.icon} {topic.title}</span>
        <span className="breadcrumb-sep">›</span>
        <span>{subtopic.title}</span>
        <span className="breadcrumb-sep">·</span>
        <span className="read-time">⏱ {mins} min read</span>
        {done && <span className="breadcrumb-done">✓ Completed</span>}
      </div>

      <div className="topic-content markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children }) {
              const isBlock = /language-\w+/.test(className || '');
              if (isBlock) return <CodeBlock className={className}>{children}</CodeBlock>;
              return <code className={className}>{children}</code>;
            }
          }}
        >
          {subtopic.content}
        </ReactMarkdown>
      </div>

      {subtopic.exercises && subtopic.exercises.length > 0 && (
        <div className="exercises-section">
          <h2 className="exercises-title">💻 Exercises</h2>
          {subtopic.exercises.map((ex, i) => (
            <div key={i} className="exercise-card">
              <button
                className="exercise-toggle"
                onClick={() => toggleExercise(i)}
              >
                <span className="ex-num">{i + 1}</span>
                <span>{ex.title}</span>
                <span className="ex-chevron">{openExercises[i] ? '−' : '+'}</span>
              </button>
              {openExercises[i] && (
                <div className="exercise-body">{ex.description}</div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="lesson-footer">
        <button className={`mark-done-btn${done ? ' done' : ''}`} onClick={() => toggle(lessonKey)}>
          {done ? '✓ Mark as Completed' : '○ Mark as Complete'}
        </button>
      </div>

      <div className="nav-buttons">
        {prevSub ? (
          <button className="nav-btn prev" onClick={() => { toggle; navigate(`/topic/${topicKey}/${prevSub.id}`); }}>
            ← {prevSub.title}
          </button>
        ) : <span />}
        {nextSub && (
          <button className="nav-btn next" onClick={() => navigate(`/topic/${topicKey}/${nextSub.id}`)}>
            {nextSub.title} →
          </button>
        )}
      </div>

      {showTop && (
        <button className="scroll-top-btn" onClick={scrollTop} aria-label="Scroll to top">↑</button>
      )}
    </div>
  );
}
