import { Link } from 'react-router-dom';
import { pythonCourses } from '../data/pythonData';

const META = {
  basics:      { col: '#10b981', bg: 'rgba(16,185,129,0.08)',  tag: 'Foundation',     est: '8 hrs',  level: 'Beginner' },
  controlflow: { col: '#3b82f6', bg: 'rgba(59,130,246,0.08)',  tag: 'Logic & Flow',   est: '6 hrs',  level: 'Beginner' },
  functions:   { col: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',  tag: 'Core Power',     est: '7 hrs',  level: 'Intermediate' },
  oop:         { col: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  tag: 'Object Oriented',est: '7 hrs',  level: 'Intermediate' },
  modules:     { col: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   tag: 'Real-World',     est: '8 hrs',  level: 'Intermediate' },
};

const SKILLS = [
  { icon: '🐍', label: 'Python Syntax & OOP' },
  { icon: '🔁', label: 'Loops & Comprehensions' },
  { icon: '📦', label: 'Modules & Packages' },
  { icon: '🕸️', label: 'Web Scraping (BeautifulSoup)' },
  { icon: '🤖', label: 'Selenium with Python' },
  { icon: '🧪', label: 'Pytest Framework' },
  { icon: '📊', label: 'Data Handling (CSV/JSON)' },
  { icon: '⚡', label: 'Async & Generators' },
  { icon: '🔗', label: 'REST APIs (requests)' },
  { icon: '📁', label: 'File I/O & OS module' },
];

const ROADMAP = [
  { step: '01', title: 'Python Basics',    desc: 'Variables, data types, strings, I/O & operators',          col: '#10b981' },
  { step: '02', title: 'Control Flow',     desc: 'If/else, loops, comprehensions & pattern matching',        col: '#3b82f6' },
  { step: '03', title: 'Functions',        desc: 'Args, kwargs, recursion, decorators & lambdas',            col: '#8b5cf6' },
  { step: '04', title: 'OOP in Python',    desc: 'Classes, inheritance, dunder methods & dataclasses',       col: '#f59e0b' },
  { step: '05', title: 'Modules & Tools',  desc: 'pip, venv, file I/O, JSON, requests & pytest',            col: '#06b6d4' },
];

const JOBS = [
  { title: 'Python Automation QA', co: 'IT / Product',   sal: '₹7–22 LPA' },
  { title: 'SDET (Python)',         co: 'MNCs / Startups', sal: '₹8–25 LPA' },
  { title: 'Data Engineer',         co: 'Analytics / AI', sal: '₹10–30 LPA' },
  { title: 'Backend Developer',     co: 'SaaS / FinTech', sal: '₹10–28 LPA' },
];

const SNIPPET = `# Python in action — automation + testing
import pytest
from selenium import webdriver

@pytest.fixture
def driver():
    d = webdriver.Chrome()
    yield d
    d.quit()

def test_title(driver):
    driver.get("https://example.com")
    assert "Example" in driver.title
    print("✓ Title assertion passed")`;

export default function PythonHome() {
  const totalLessons = Object.values(pythonCourses)
    .reduce((s, c) => s + c.subtopics.length, 0);

  return (
    <div className="ch-wrap ch-python">

      {/* HERO */}
      <div className="ch-hero">
        <Link to="/" className="back-to-dash">← Back to Dashboard</Link>
        <div className="ch-hero-bg-symbol">🐍</div>
        <div className="ch-hero-badge">🐍 PYTHON PROGRAMMING COURSE</div>
        <h1 className="ch-hero-title">Master Python — The Language<br/>That Powers Automation &amp; AI</h1>
        <p className="ch-hero-sub">
          From scripting basics to Pytest automation and OOP design — Python is the
          fastest way to become a versatile SDET or developer.
        </p>
        <div className="ch-hero-pills">
          <span className="ch-pill" style={{"--pc":'#10b981'}}>⏱ 36+ Hours</span>
          <span className="ch-pill" style={{"--pc":'#10b981'}}>📚 {totalLessons} Lessons</span>
          <span className="ch-pill" style={{"--pc":'#10b981'}}>🎯 5 Chapters</span>
          <span className="ch-pill" style={{"--pc":'#10b981'}}>🆓 Completely Free</span>
          <span className="ch-pill" style={{"--pc":'#10b981'}}>🔬 Pytest Included</span>
        </div>
        <div className="ch-code-preview">
          <div className="ch-code-bar">
            <span className="ch-dot" style={{background:'#ff5f56'}} />
            <span className="ch-dot" style={{background:'#ffbd2e'}} />
            <span className="ch-dot" style={{background:'#27c93f'}} />
            <span className="ch-code-fname">test_browser.py</span>
          </div>
          <pre className="ch-code">{SNIPPET}</pre>
        </div>
      </div>

      {/* CHAPTERS */}
      <div className="ch-section">
        <div className="ch-sec-label" style={{color:'#10b981'}}>CURRICULUM</div>
        <h2 className="ch-sec-title">5 Chapters. One Complete Path.</h2>
        <div className="ch-cards">
          {Object.entries(pythonCourses).map(([key, ch], i) => {
            const m = META[key] || { col:'#10b981', bg:'rgba(16,185,129,0.08)', tag:'Module', est:'5 hrs', level:'All' };
            return (
              <Link to={`/python/${key}/1`} key={key} className="ch-card" style={{'--cc': m.col, '--cb': m.bg}}>
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
        <div className="ch-sec-label" style={{color:'#10b981'}}>OUTCOMES</div>
        <h2 className="ch-sec-title">What You'll Be Able to Do</h2>
        <div className="ch-skills">
          {SKILLS.map(s => (
            <div key={s.label} className="ch-skill-chip">{s.icon} {s.label}</div>
          ))}
        </div>
      </div>

      {/* ROADMAP */}
      <div className="ch-section">
        <div className="ch-sec-label" style={{color:'#10b981'}}>LEARNING PATH</div>
        <h2 className="ch-sec-title">Your Python Mastery Roadmap</h2>
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

      {/* JOBS */}
      <div className="ch-section ch-section--alt">
        <div className="ch-sec-label" style={{color:'#10b981'}}>CAREER</div>
        <h2 className="ch-sec-title">Where Python Takes You</h2>
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
      <div className="ch-cta" style={{'--cta-col':'#10b981'}}>
        <h2 className="ch-cta-title">Start coding Python today — for free.</h2>
        <p className="ch-cta-sub">Begin with Chapter 01 — run code in the browser. No install. No setup.</p>
        <Link to="/python/basics/1" className="ch-cta-btn">Start Chapter 01: Python Basics →</Link>
      </div>

    </div>
  );
}
