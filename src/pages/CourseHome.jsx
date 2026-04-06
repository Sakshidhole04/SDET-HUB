import { Link } from 'react-router-dom';

export default function CourseHome({ courses, title, subtitle, icon, baseRoute }) {
  return (
    <div className="sdet-home">
      <div className="sdet-welcome">
        <div className="sdet-rocket">{icon}</div>
        <h1 className="sdet-welcome-title">{title}</h1>
        <p className="sdet-welcome-sub">{subtitle}</p>
      </div>
      <div className="sdet-topic-cards">
        {Object.entries(courses).map(([key, chapter]) => (
          <Link to={`${baseRoute}/${key}/1`} key={key} className="sdet-card">
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
