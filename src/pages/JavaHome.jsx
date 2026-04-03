import { Link } from 'react-router-dom';
import { javaCourses } from '../data/javaData';

export default function JavaHome() {
  return (
    <div className="sdet-home">
      <div className="sdet-welcome">
        <div className="sdet-rocket">☕</div>
        <h1 className="sdet-welcome-title">Java Development</h1>
        <p className="sdet-welcome-sub">Master Java from Core to Advanced — select a chapter to begin</p>
      </div>
      <div className="sdet-topic-cards">
        {Object.entries(javaCourses).map(([key, chapter]) => (
          <Link to={`/java/${key}/1`} key={key} className="sdet-card">
            <div className="sdet-card-icon" style={{ color: chapter.color }}>{chapter.icon}</div>
            <div className="sdet-card-title">{chapter.title}</div>
            <div className="sdet-card-count">
              {chapter.subtopics.length} lessons
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
