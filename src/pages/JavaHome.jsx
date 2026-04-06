import { Link } from 'react-router-dom';
import { javaCourses } from '../data/javaData';

const META = {
  basics:     { col: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  tag: 'Foundation',     est: '10 hrs', level: 'Beginner' },
  oop:        { col: '#6366f1', bg: 'rgba(99,102,241,0.08)',  tag: 'Core Concept',   est: '9 hrs',  level: 'Intermediate' },
  collections:{ col: '#10b981', bg: 'rgba(16,185,129,0.08)', tag: 'Data Structures', est: '7 hrs', level: 'Intermediate' },
  exceptions: { col: '#ef4444', bg: 'rgba(239,68,68,0.08)',   tag: 'Error Handling', est: '5 hrs', level: 'Intermediate' },
  advanced:   { col: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', tag: 'Pro Level',       est: '8 hrs', level: 'Advanced' },
};

const SKILLS = [
  { icon: '☕', label: 'Core Java (OOP)' },
  { icon: '🧩', label: 'Collections API' },
  { icon: '🔀', label: 'Multithreading' },
  { icon: '⚡', label: 'Lambda & Streams' },
  { icon: '🛡️', label: 'Exception Handling' },
  { icon: '🌐', label: 'Spring Boot Basics' },
  { icon: '📦', label: 'Maven / Gradle' },
  { icon: '🔁', label: 'Design Patterns' },
  { icon: '🧪', label: 'JUnit & TestNG' },
  { icon: '🗄️', label: 'JDBC / JPA' },
];

const ROADMAP = [
  { step: '01', title: 'Java Basics',        desc: 'Variables, data types, operators, control flow & arrays',    col: '#f59e0b' },
  { step: '02', title: 'OOP & Classes',      desc: 'Inheritance, polymorphism, abstraction & interfaces',         col: '#6366f1' },
  { step: '03', title: 'Collections',        desc: 'List, Map, Set, Iterator & sorting algorithms',              col: '#10b981' },
  { step: '04', title: 'Exception Handling', desc: 'Try-catch, custom exceptions & finally blocks',               col: '#ef4444' },
  { step: '05', title: 'Advanced Java',      desc: 'Streams, lambdas, generics & multithreading',                col: '#8b5cf6' },
];

const JOBS = [
  { title: 'Java Developer',    co: 'IT / Product',   sal: '₹6–22 LPA' },
  { title: 'SDET (Java)',       co: 'MNCs / Startups', sal: '₹8–25 LPA' },
  { title: 'Backend Engineer', co: 'FinTech / SaaS',  sal: '₹12–35 LPA' },
  { title: 'Tech Lead',         co: 'Enterprise',      sal: '₹20–50 LPA' },
];

const SNIPPET = `// Java in action — collections + streams
List<String> tools = List.of(
  "Selenium", "RestAssured", "Playwright"
);
tools.stream()
     .filter(t -> t.length() > 8)
     .map(String::toUpperCase)
     .forEach(System.out::println);
// Output:
// RESTASSURED
// PLAYWRIGHT`;

export default function JavaHome() {
  const totalLessons = Object.values(javaCourses)
    .reduce((s, c) => s + c.subtopics.length, 0);

  return (
    <div className="ch-wrap ch-java">

      {/* HERO */}
      <div className="ch-hero">
        <div className="ch-hero-bg-symbol">{ '{ }' }</div>
        <div className="ch-hero-badge">☕ JAVA DEVELOPMENT COURSE</div>
        <h1 className="ch-hero-title">Master Java — From Basics<br/>to Enterprise-Grade Code</h1>
        <p className="ch-hero-sub">
          The most in-demand backend language for SDET, software engineering &amp; enterprise
          systems. Learn it the right way — structured, practical, zero fluff.
        </p>
        <div className="ch-hero-pills">
          <span className="ch-pill" style={{"--pc":'#f59e0b'}}>⏱ 39+ Hours</span>
          <span className="ch-pill" style={{"--pc":'#f59e0b'}}>📚 {totalLessons} Lessons</span>
          <span className="ch-pill" style={{"--pc":'#f59e0b'}}>🎯 5 Chapters</span>
          <span className="ch-pill" style={{"--pc":'#f59e0b'}}>🆓 Completely Free</span>
          <span className="ch-pill" style={{"--pc":'#f59e0b'}}>💻 Live Code Editor</span>
        </div>
        {/* inline code preview */}
        <div className="ch-code-preview">
          <div className="ch-code-bar">
            <span className="ch-dot" style={{background:'#ff5f56'}} />
            <span className="ch-dot" style={{background:'#ffbd2e'}} />
            <span className="ch-dot" style={{background:'#27c93f'}} />
            <span className="ch-code-fname">StreamsDemo.java</span>
          </div>
          <pre className="ch-code">{SNIPPET}</pre>
        </div>
      </div>

      {/* CHAPTERS */}
      <div className="ch-section">
        <div className="ch-sec-label" style={{color:'#f59e0b'}}>CURRICULUM</div>
        <h2 className="ch-sec-title">5 Chapters. One Complete Path.</h2>
        <div className="ch-cards">
          {Object.entries(javaCourses).map(([key, ch], i) => {
            const m = META[key] || { col:'#f59e0b', bg:'rgba(245,158,11,0.08)', tag:'Module', est:'5 hrs', level:'All' };
            return (
              <Link to={`/java/${key}/1`} key={key} className="ch-card" style={{'--cc': m.col, '--cb': m.bg}}>
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
        <div className="ch-sec-label" style={{color:'#f59e0b'}}>OUTCOMES</div>
        <h2 className="ch-sec-title">What You'll Be Able to Do</h2>
        <div className="ch-skills">
          {SKILLS.map(s => (
            <div key={s.label} className="ch-skill-chip">{s.icon} {s.label}</div>
          ))}
        </div>
      </div>

      {/* ROADMAP */}
      <div className="ch-section">
        <div className="ch-sec-label" style={{color:'#f59e0b'}}>LEARNING PATH</div>
        <h2 className="ch-sec-title">Your Java Mastery Roadmap</h2>
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
        <div className="ch-sec-label" style={{color:'#f59e0b'}}>CAREER</div>
        <h2 className="ch-sec-title">Where Java Takes You</h2>
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
      <div className="ch-cta" style={{'--cta-col':'#f59e0b'}}>
        <h2 className="ch-cta-title">Start writing Java today — for free.</h2>
        <p className="ch-cta-sub">Begin with Chapter 01 — run live code inside the browser. No install needed.</p>
        <Link to="/java/basics/1" className="ch-cta-btn">Start Chapter 01: Java Basics →</Link>
      </div>

    </div>
  );
}

