import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-cards">

        {/* SDET Card */}
        <div className="landing-card" onClick={() => navigate('/sdet')}>
          <div className="landing-card-icon">🧪</div>
          <h2 className="landing-card-title">SDET</h2>
          <p className="landing-card-sub">Software Development Engineer in Test</p>
          <button className="landing-btn" onClick={e => { e.stopPropagation(); navigate('/sdet'); }}>
            Start Learning
          </button>
        </div>

        {/* Java Development Card */}
        <div className="landing-card" onClick={() => navigate('/java')}>
          <div className="landing-card-icon">☕</div>
          <h2 className="landing-card-title">Java Development</h2>
          <p className="landing-card-sub">Master Java from Basics to Advanced</p>
          <button className="landing-btn" onClick={e => { e.stopPropagation(); navigate('/java'); }}>
            Start Learning
          </button>
        </div>

      </div>
    </div>
  );
}
