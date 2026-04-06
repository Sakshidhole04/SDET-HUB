import { Link } from 'react-router-dom';
import { topics } from '../data/topics';

/* ── meta per chapter ── */
const META = {
  selenium:  { col: '#6366f1', bg: 'rgba(99,102,241,0.08)',  tag: 'Core Foundation',  est: '8 hrs',  level: 'Beginner → Advanced' },
  api:       { col: '#10b981', bg: 'rgba(16,185,129,0.08)',  tag: 'Backend Testing',  est: '6 hrs',  level: 'Intermediate'        },
  playwright:{ col: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  tag: 'Modern Automation',est: '7 hrs',  level: 'Intermediate'        },
  use:       { col: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   tag: 'Hands-on Practice',est: '5 hrs',  level: 'All Levels'          },
  interview: { col: '#ec4899', bg: 'rgba(236,72,153,0.08)',  tag: 'Career Prep',      est: '4 hrs',  level: 'Job Seekers'         },
};

const SKILLS = [
  { icon: '⚙️', label: 'Selenium WebDriver' },
  { icon: '🔗', label: 'REST API Testing' },
  { icon: '🎭', label: 'Playwright' },
  { icon: '🧪', label: 'TestNG & JUnit' },
  { icon: '🔁', label: 'CI/CD & Jenkins' },
  { icon: '📊', label: 'Framework Design' },
  { icon: '🗄️', label: 'SQL for QA' },
  { icon: '🐍', label: 'Python Scripting' },
  { icon: '📋', label: 'BDD / Cucumber' },
  { icon: '☁️', label: 'Cloud Testing' },
];

const ROADMAP = [
  { step: '01', title: 'Selenium Automation', desc: 'Core WebDriver, locators, waits & framework basics', col: '#6366f1' },
  { step: '02', title: 'API Automation',       desc: 'REST calls, RestAssured, JSON validation',           col: '#10b981' },
  { step: '03', title: 'Playwright',           desc: 'Modern cross-browser testing with JS/Java',          col: '#f59e0b' },
  { step: '04', title: 'Live Practice',        desc: 'Real projects, exercises & coding challenges',       col: '#06b6d4' },
  { step: '05', title: 'Interview Prep',       desc: 'Top questions, mock answers, resume tips',           col: '#ec4899' },
];

const JOBS = [
  { title: 'SDET',             co: 'Product Companies',   sal: '₹8–25 LPA' },
  { title: 'Automation QA',    co: 'IT Services',         sal: '₹6–18 LPA' },
  { title: 'QA Lead',          co: 'Startups / MNCs',     sal: '₹12–30 LPA' },
  { title: 'Test Architect',   co: 'Enterprise',          sal: '₹20–45 LPA' },
];

export default function SdetHome() {
  const totalLessons = Object.values(topics).reduce((s, t) => s + t.subtopics.length, 0);

  return (
    <div className="sh-wrap">

      {/* ── HERO ── */}
      <div className="sh-hero">
        <Link to="/" className="back-to-dash">← Back to Dashboard</Link>
        <div className="sh-hero-badge">🧪 SDET MASTERY COURSE</div>
        <h1 className="sh-hero-title">Master Software Development<br />Engineer in Test</h1>
        <p className="sh-hero-sub">
          From Selenium basics to Playwright, API automation, CI/CD and interview
          prep — everything you need to land an SDET role, structured in one place.
        </p>
        <div className="sh-hero-pills">
          <span className="sh-pill">⏱ 30+ Hours</span>
          <span className="sh-pill">📚 {totalLessons} Lessons</span>
          <span className="sh-pill">🎯 5 Modules</span>
          <span className="sh-pill">🆓 100% Free</span>
          <span className="sh-pill">💻 Code in Browser</span>
        </div>
      </div>

      {/* ── CHAPTER CARDS ── */}
      <div className="sh-section">
        <div className="sh-sec-label">CURRICULUM</div>
        <h2 className="sh-sec-title">Choose Your Module</h2>
        <div className="sh-cards">
          {Object.entries(topics).map(([key, topic], i) => {
            const m = META[key] || { col: '#6366f1', bg: 'rgba(99,102,241,0.08)', tag: 'Module', est: '5 hrs', level: 'All Levels' };
            return (
              <Link to={`/topic/${key}/1`} key={key} className="sh-card" style={{ '--cc': m.col, '--cb': m.bg }}>
                <div className="sh-card-top">
                  <span className="sh-card-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="sh-card-tag">{m.tag}</span>
                </div>
                <div className="sh-card-icon">{topic.icon}</div>
                <h3 className="sh-card-title">{topic.title}</h3>
                <div className="sh-card-meta">
                  <span>📖 {topic.subtopics.length} lessons</span>
                  <span>⏱ {m.est}</span>
                </div>
                <div className="sh-card-level">{m.level}</div>
                <div className="sh-card-arrow">Start Module →</div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── SKILLS YOU'LL GAIN ── */}
      <div className="sh-section sh-section--alt">
        <div className="sh-sec-label">OUTCOMES</div>
        <h2 className="sh-sec-title">Skills You'll Gain</h2>
        <div className="sh-skills">
          {SKILLS.map(s => (
            <div key={s.label} className="sh-skill-chip">
              <span>{s.icon}</span> {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── ROADMAP ── */}
      <div className="sh-section">
        <div className="sh-sec-label">LEARNING PATH</div>
        <h2 className="sh-sec-title">Your SDET Roadmap</h2>
        <div className="sh-roadmap">
          {ROADMAP.map((r, i) => (
            <div key={i} className="sh-rm-step" style={{ '--rc': r.col }}>
              <div className="sh-rm-dot" />
              {i < ROADMAP.length - 1 && <div className="sh-rm-line" />}
              <div className="sh-rm-body">
                <span className="sh-rm-num">{r.step}</span>
                <div>
                  <div className="sh-rm-title">{r.title}</div>
                  <div className="sh-rm-desc">{r.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CAREER OUTCOMES ── */}
      <div className="sh-section sh-section--alt">
        <div className="sh-sec-label">CAREER</div>
        <h2 className="sh-sec-title">Where This Takes You</h2>
        <div className="sh-jobs">
          {JOBS.map((j, i) => (
            <div key={i} className="sh-job-card">
              <div className="sh-job-title">{j.title}</div>
              <div className="sh-job-co">{j.co}</div>
              <div className="sh-job-sal">{j.sal}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="sh-cta">
        <h2 className="sh-cta-title">Ready to start your SDET journey?</h2>
        <p className="sh-cta-sub">Begin with Module 01 — Selenium Automation. No setup. Just code.</p>
        <Link to="/topic/selenium/1" className="sh-cta-btn">Start Module 01: Selenium →</Link>
      </div>

    </div>
  );
}

