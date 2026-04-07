import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { javaCourses } from '../data/javaData';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from '../components/CodeBlock';
import { useProgress } from '../context/ProgressContext';

function readTime(text) {
  return Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));
}

export default function JavaTopicPage() {
  const { chapterId, lessonId } = useParams();
  const navigate = useNavigate();
  const { isDone, toggle } = useProgress();
  const [openExercises, setOpenExercises] = useState({});
  const [showTop, setShowTop] = useState(false);

  const chapter = javaCourses[chapterId];
  if (!chapter) return <div className="not-found">Chapter not found</div>;

  const currentId = parseInt(lessonId);
  const lesson = chapter.subtopics.find(s => s.id === currentId);
  if (!lesson) return <div className="not-found">Lesson not found</div>;

  const prevLesson = chapter.subtopics.find(s => s.id === currentId - 1);
  const nextLesson = chapter.subtopics.find(s => s.id === currentId + 1);
  const lessonKey = `java-${chapterId}-${currentId}`;
  const done = isDone(lessonKey);
  const mins = readTime(lesson.content);

  const toggleExercise = (i) => setOpenExercises(p => ({ ...p, [i]: !p[i] }));

  useEffect(() => {
    const el = document.querySelector('.main-content');
    if (!el) return;
    const handler = () => setShowTop(el.scrollTop > 320);
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, [lessonId]);

  const scrollTop = () => document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="topic-page">

      {/* ── LESSON HERO ── */}
      <div className="lesson-hero" style={{'--lh-col': chapter.color || '#f59e0b'}}>
        <div className="lesson-hero-badge">{chapter.icon} {chapter.title}</div>
        <h1 className="lesson-hero-title">{lesson.title}</h1>
        <p className="lesson-hero-meta">
          <span>⏱ {mins} min read</span>
          <span className="lh-sep">·</span>
          <span>Lesson {currentId} of {chapter.subtopics.length}</span>
          {done && <><span className="lh-sep">·</span><span className="lh-done">✓ Completed</span></>}
        </p>
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
          {lesson.content}
        </ReactMarkdown>
      </div>

      {lesson.exercises && lesson.exercises.length > 0 && (
        <div className="exercises-section">
          <h2 className="exercises-title">💻 Exercises</h2>
          {lesson.exercises.map((ex, i) => (
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
        {prevLesson ? (
          <button className="nav-btn prev" onClick={() => navigate(`/java/${chapterId}/${prevLesson.id}`)}>
            ← {prevLesson.title}
          </button>
        ) : <span />}
        {nextLesson && (
          <button className="nav-btn next" onClick={() => navigate(`/java/${chapterId}/${nextLesson.id}`)}>
            {nextLesson.title} →
          </button>
        )}
      </div>

      {showTop && (
        <button className="scroll-top-btn" onClick={scrollTop} aria-label="Scroll to top">↑</button>
      )}
    </div>
  );
}
