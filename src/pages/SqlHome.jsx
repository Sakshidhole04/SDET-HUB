import { Link } from 'react-router-dom';
import { sqlCourses } from '../data/sqlData';

const META = {
  basics:   { col: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   tag: 'Foundation',     est: '7 hrs',  level: 'Beginner' },
  dml:      { col: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  tag: 'Data Operations', est: '5 hrs', level: 'Beginner' },
  joins:    { col: '#6366f1', bg: 'rgba(99,102,241,0.08)',  tag: 'Relationships',   est: '7 hrs', level: 'Intermediate' },
  advanced: { col: '#ec4899', bg: 'rgba(236,72,153,0.08)',  tag: 'Pro Queries',     est: '8 hrs', level: 'Advanced' },
};

const SKILLS = [
  { icon: '🗄️', label: 'DDL & DML Mastery' },
  { icon: '🔗', label: 'JOINs (INNER/OUTER/CROSS)' },
  { icon: '📊', label: 'GROUP BY & Aggregates' },
  { icon: '🔍', label: 'Subqueries & CTEs' },
  { icon: '⚡', label: 'Query Optimization' },
  { icon: '🏗️', label: 'Schema Design' },
  { icon: '🔒', label: 'Transactions & ACID' },
  { icon: '🧪', label: 'DB Testing for QA' },
  { icon: '📈', label: 'Window Functions' },
  { icon: '🔑', label: 'Indexes & Keys' },
];

const ROADMAP = [
  { step: '01', title: 'SQL Basics',           desc: 'SELECT, WHERE, CREATE, DROP, ALTER & data types',           col: '#06b6d4' },
  { step: '02', title: 'Data Manipulation',    desc: 'INSERT, UPDATE, DELETE, transactions & constraints',        col: '#f59e0b' },
  { step: '03', title: 'JOINs & Relations',    desc: 'INNER, LEFT, RIGHT, FULL JOINs & multi-table queries',      col: '#6366f1' },
  { step: '04', title: 'Advanced SQL',         desc: 'Subqueries, CTEs, window functions, stored procedures',     col: '#ec4899' },
];

const JOBS = [
  { title: 'DB Tester / SDET',   co: 'IT / QA Teams',   sal: '₹6–20 LPA' },
  { title: 'SQL Developer',       co: 'Enterprise / BI', sal: '₹8–24 LPA' },
  { title: 'Data Analyst',        co: 'Analytics / SaaS',sal: '₹7–22 LPA' },
  { title: 'Database Engineer',   co: 'FinTech / MNC',   sal: '₹12–35 LPA' },
];

const SNIPPET = `-- SQL in action — joins + window functions
SELECT
  e.name,
  d.dept_name,
  e.salary,
  RANK() OVER (
    PARTITION BY d.dept_name
    ORDER BY e.salary DESC
  ) AS salary_rank
FROM employees e
JOIN departments d ON e.dept_id = d.id
WHERE e.salary > 50000
ORDER BY d.dept_name, salary_rank;`;

export default function SQLHome() {
  const totalLessons = Object.values(sqlCourses)
    .reduce((s, c) => s + c.subtopics.length, 0);

  return (
    <div className="ch-wrap ch-sql">

      {/* HERO */}
      <div className="ch-hero">
        <div className="ch-hero-bg-symbol">SQL</div>
        <div className="ch-hero-badge">🗄️ SQL & DATABASES COURSE</div>
        <h1 className="ch-hero-title">Master SQL — The Language<br/>Every SDET &amp; Developer Needs</h1>
        <p className="ch-hero-sub">
          SQL is tested in 80% of SDET interviews. Learn to query, join, aggregate and
          validate data with confidence — from first SELECT to advanced window functions.
        </p>
        <div className="ch-hero-pills">
          <span className="ch-pill" style={{"--pc":'#06b6d4'}}>⏱ 27+ Hours</span>
          <span className="ch-pill" style={{"--pc":'#06b6d4'}}>📚 {totalLessons} Lessons</span>
          <span className="ch-pill" style={{"--pc":'#06b6d4'}}>🎯 4 Chapters</span>
          <span className="ch-pill" style={{"--pc":'#06b6d4'}}>🆓 Completely Free</span>
          <span className="ch-pill" style={{"--pc":'#06b6d4'}}>🧪 DB Testing Focus</span>
        </div>
        <div className="ch-code-preview">
          <div className="ch-code-bar">
            <span className="ch-dot" style={{background:'#ff5f56'}} />
            <span className="ch-dot" style={{background:'#ffbd2e'}} />
            <span className="ch-dot" style={{background:'#27c93f'}} />
            <span className="ch-code-fname">rank_query.sql</span>
          </div>
          <pre className="ch-code">{SNIPPET}</pre>
        </div>
      </div>

      {/* CHAPTERS */}
      <div className="ch-section">
        <div className="ch-sec-label" style={{color:'#06b6d4'}}>CURRICULUM</div>
        <h2 className="ch-sec-title">4 Chapters. One Complete Path.</h2>
        <div className="ch-cards">
          {Object.entries(sqlCourses).map(([key, ch], i) => {
            const m = META[key] || { col:'#06b6d4', bg:'rgba(6,182,212,0.08)', tag:'Module', est:'5 hrs', level:'All' };
            return (
              <Link to={`/sql/${key}/1`} key={key} className="ch-card" style={{'--cc': m.col, '--cb': m.bg}}>
                <div className="ch-card-top">
                  <span className="ch-card-num">{String(i+1).padStart(2,'0')}</span>
                  <span className="ch-card-tag">{m.tag}</span>
                </div>
                <div className="ch-card-icon">{ch.icon}</div>
                <h3 className="ch-card-title">{ch.title}</h3>
                <div className="ch-card-meta">
                  <span>📖 {ch.subtopics.length} lessons</span>
                  <span>⏱ {m.est}</span>
                </div>
                <div className="ch-card-level">{m.level}</div>
                <div className="ch-card-arrow">Start Chapter →</div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* SKILLS */}
      <div className="ch-section ch-section--alt">
        <div className="ch-sec-label" style={{color:'#06b6d4'}}>OUTCOMES</div>
        <h2 className="ch-sec-title">What You'll Be Able to Do</h2>
        <div className="ch-skills">
          {SKILLS.map(s => (
            <div key={s.label} className="ch-skill-chip">{s.icon} {s.label}</div>
          ))}
        </div>
      </div>

      {/* ROADMAP */}
      <div className="ch-section">
        <div className="ch-sec-label" style={{color:'#06b6d4'}}>LEARNING PATH</div>
        <h2 className="ch-sec-title">Your SQL Mastery Roadmap</h2>
        <div className="ch-roadmap">
          {ROADMAP.map((r, i) => (
            <div key={i} className="ch-rm-step" style={{'--rc': r.col}}>
              <div className="ch-rm-dot" />
              {i < ROADMAP.length - 1 && <div className="ch-rm-line" />}
              <div className="ch-rm-body">
                <span className="ch-rm-num">{r.step}</span>
                <div>
                  <div className="ch-rm-title">{r.title}</div>
                  <div className="ch-rm-desc">{r.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERVIEW STAT */}
      <div className="ch-section ch-section--alt">
        <div className="ch-sec-label" style={{color:'#06b6d4'}}>WHY SQL</div>
        <h2 className="ch-sec-title">SQL Shows Up Everywhere in SDET Interviews</h2>
        <div className="ch-sql-stats">
          <div className="ch-sql-stat"><span className="ch-sql-num">80%</span><span className="ch-sql-txt">SDET interviews include SQL queries</span></div>
          <div className="ch-sql-stat"><span className="ch-sql-num">3×</span><span className="ch-sql-txt">faster to validate data via SQL than through UI</span></div>
          <div className="ch-sql-stat"><span className="ch-sql-num">#5</span><span className="ch-sql-txt">most in-demand skill on job descriptions</span></div>
          <div className="ch-sql-stat"><span className="ch-sql-num">100%</span><span className="ch-sql-txt">covered here — free, no signup</span></div>
        </div>
      </div>

      {/* JOBS */}
      <div className="ch-section">
        <div className="ch-sec-label" style={{color:'#06b6d4'}}>CAREER</div>
        <h2 className="ch-sec-title">Where SQL Takes You</h2>
        <div className="ch-jobs">
          {JOBS.map((j, i) => (
            <div key={i} className="ch-job-card">
              <div className="ch-job-title">{j.title}</div>
              <div className="ch-job-co">{j.co}</div>
              <div className="ch-job-sal">{j.sal}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="ch-cta" style={{'--cta-col':'#06b6d4'}}>
        <h2 className="ch-cta-title">Write your first SQL query today — free.</h2>
        <p className="ch-cta-sub">Begin with Chapter 01 — SELECT, WHERE, FROM. Master the foundation before your next interview.</p>
        <Link to="/sql/basics/1" className="ch-cta-btn">Start Chapter 01: SQL Basics →</Link>
      </div>

    </div>
  );
}
