import { Link } from 'react-router-dom';
import { topics } from '../data/topics';

export default function SdetHome() {
  return (
    <div className="sdet-home">
      <div className="sdet-welcome">
        <div className="sdet-rocket">🚀</div>
        <h1 className="sdet-welcome-title">Welcome to SDET</h1>
        <p className="sdet-welcome-sub">Select a topic from the sidebar to get started</p>
      </div>
      <div className="sdet-topic-cards">
        {Object.entries(topics).map(([key, topic]) => (
          <Link to={`/topic/${key}/1`} key={key} className="sdet-card">
            <div className="sdet-card-icon">{topic.icon}</div>
            <div className="sdet-card-title">{topic.title}</div>
            <div className="sdet-card-count">
              {topic.subtopics.length}{' '}
              {key === 'interview' ? 'categories' : 'topics'}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
