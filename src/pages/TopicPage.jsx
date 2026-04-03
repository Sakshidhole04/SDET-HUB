import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/topics';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function TopicPage() {
  const { topicKey, subtopicId } = useParams();
  const navigate = useNavigate();
  const [openExercises, setOpenExercises] = useState({});

  const topic = topics[topicKey];
  if (!topic) return <div className="not-found">Topic not found</div>;

  const currentId = parseInt(subtopicId);
  const subtopic = topic.subtopics.find(s => s.id === currentId);
  if (!subtopic) return <div className="not-found">Subtopic not found</div>;

  const prevSub = topic.subtopics.find(s => s.id === currentId - 1);
  const nextSub = topic.subtopics.find(s => s.id === currentId + 1);

  const toggleExercise = (i) => setOpenExercises(p => ({ ...p, [i]: !p[i] }));

  return (
    <div className="topic-page">
      <div className="topic-breadcrumb">
        <span>{topic.icon} {topic.title}</span>
        <span className="breadcrumb-sep">›</span>
        <span>{subtopic.title}</span>
      </div>

      <div className="topic-content markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{subtopic.content}</ReactMarkdown>
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

      <div className="nav-buttons">
        {prevSub ? (
          <button className="nav-btn prev" onClick={() => navigate(`/topic/${topicKey}/${prevSub.id}`)}>
            ← {prevSub.title}
          </button>
        ) : <span />}
        {nextSub && (
          <button className="nav-btn next" onClick={() => navigate(`/topic/${topicKey}/${nextSub.id}`)}>
            {nextSub.title} →
          </button>
        )}
      </div>
    </div>
  );
}
