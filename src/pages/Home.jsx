import { Link } from 'react-router-dom';
import { topics } from '../data/topics';

export default function Home() {
  return (
    <div className="home">
      <div className="welcome-hero">
        <div className="rocket">🚀</div>
        <h1>Welcome to SDET</h1>
        <p>Select a topic from the sidebar to get started</p>
      </div>
      <div className="topic-cards">
        {Object.entries(topics).map(([key, topic]) => (
          <Link to={`/topic/${key}/1`} key={key} className="topic-card">
            <div className="card-icon">{topic.icon}</div>
            <div className="card-title">{topic.title}</div>
            <div className="card-count">
              {topic.subtopics.length}{' '}
              {key === 'interview' ? 'categories' : 'topics'}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
