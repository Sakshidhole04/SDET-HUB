import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { javaCourses } from '../data/javaData';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function JavaTopicPage() {
  const { chapterId, lessonId } = useParams();
  const navigate = useNavigate();
  const [openExercises, setOpenExercises] = useState({});

  const chapter = javaCourses[chapterId];
  if (!chapter) return <div className="not-found">Chapter not found</div>;

  const currentId = parseInt(lessonId);
  const lesson = chapter.subtopics.find(s => s.id === currentId);
  if (!lesson) return <div className="not-found">Lesson not found</div>;

  const prevLesson = chapter.subtopics.find(s => s.id === currentId - 1);
  const nextLesson = chapter.subtopics.find(s => s.id === currentId + 1);

  const toggleExercise = (i) => setOpenExercises(p => ({ ...p, [i]: !p[i] }));

  return (
    <div className="topic-page">
      <div className="topic-breadcrumb">
        <span>{chapter.icon} {chapter.title}</span>
        <span className="breadcrumb-sep">›</span>
        <span>{lesson.title}</span>
      </div>

      <div className="topic-content markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.content}</ReactMarkdown>
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
    </div>
  );
}
