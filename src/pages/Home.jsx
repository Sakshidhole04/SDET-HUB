import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

/* ── Typewriter ── */
const TYPED = ['Automation Testing', 'Java Development', 'Python Scripting', 'SQL Mastery', 'SDET Skills'];

const TYPED_ROUTES = ['/sdet', '/java', '/python', '/sql', '/sdet'];
const TYPED_LABELS = ['Automation Testing', 'Java', 'Python', 'SQL', 'SDET'];

function useTypewriter() {
  const [idx, setIdx]       = useState(0);
  const [charIdx, setChar]  = useState(0);
  const [del, setDel]       = useState(false);
  const [text, setText]     = useState('');
  useEffect(() => {
    const cur = TYPED[idx];
    let t;
    if (!del && charIdx < cur.length) {
      t = setTimeout(() => { setText(cur.slice(0, charIdx + 1)); setChar(c => c + 1); }, 80);
    } else if (!del && charIdx === cur.length) {
      t = setTimeout(() => setDel(true), 2000);
    } else if (del && charIdx > 0) {
      t = setTimeout(() => { setText(cur.slice(0, charIdx - 1)); setChar(c => c - 1); }, 40);
    } else {
      setDel(false);
      setIdx(i => (i + 1) % TYPED.length);
    }
    return () => clearTimeout(t);
  }, [idx, charIdx, del]);
  return { text, idx };
}

/* ── Floating code particles (canvas) ── */
const SYMS   = ['{ }', '=>', '</>', 'if()', '[ ]', 'SQL', 'fn()', '++', '===', 'def', 'class', 'npm', 'git', 'API', 'for'];
const PCOLS  = ['#c4b5fd', '#6ee7b7', '#7dd3fc', '#fca5a1', '#fde68a'];

function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    const resize = () => { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const ps = Array.from({ length: 48 }, () => ({
      x: Math.random() * cv.width, y: Math.random() * cv.height,
      vx: (Math.random() - 0.5) * 0.35, vy: -(0.12 + Math.random() * 0.38),
      sym: SYMS[Math.floor(Math.random() * SYMS.length)],
      sz: 10 + Math.random() * 9,
      a: 0.05 + Math.random() * 0.14,
      col: PCOLS[Math.floor(Math.random() * PCOLS.length)],
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(p => {
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.col;
        ctx.font = `${p.sz}px 'Courier New',monospace`;
        ctx.fillText(p.sym, p.x, p.y);
        p.x += p.vx; p.y += p.vy;
        if (p.y < -30) { p.y = cv.height + 30; p.x = Math.random() * cv.width; }
        if (p.x < -60) p.x = cv.width + 60;
        if (p.x > cv.width + 60) p.x = -60;
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="lp-particles" />;
}

/* ── Animated counter ── */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let v = 0; const step = to / 60;
      const t = setInterval(() => { v += step; if (v >= to) { setVal(to); clearInterval(t); } else setVal(Math.floor(v)); }, 24);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ── Data ── */
const COURSES = [
  { route: '/sdet',   icon: '🧪', title: 'SDET Mastery',      desc: 'Selenium, Playwright, API testing & CI/CD pipelines.',             col: '#a78bfa', tags: ['Job Ready',    'Hands-on'],         badge: '🔥 Most Popular' },
  { route: '/java',   icon: '☕', title: 'Java Development',   desc: 'Core Java, Spring Boot & Microservices architecture.',              col: '#fca5a1', tags: ['Enterprise',   'In Demand'],         badge: '⭐ Top Rated'    },
  { route: '/python', icon: '🐍', title: 'Python Programming', desc: 'OOP, automation, modules and scripting for real-world use.',         col: '#6ee7b7', tags: ['Beginner',     'Versatile'],         badge: '🚀 Trending'     },
  { route: '/sql',    icon: '🗄️', title: 'SQL & Databases',    desc: 'Queries, joins, subqueries & database testing for SDET roles.',      col: '#7dd3fc', tags: ['SDET Essential','Practical'],        badge: '✅ Must Learn'   },
];

const FEATURES = [
  {
    icon: '🎯', title: 'SDET Focused', route: '/sdet', color: '#6366f1',
    desc: 'Every course is designed with Software Testing & Dev Engineering roles in mind.',
    tagline: 'Built exclusively for QA & SDET career paths — not watered-down generic content.',
    visual: 'bars',
    items: [
      { label: 'Selenium WebDriver', pct: 95 },
      { label: 'API Testing (RestAssured)', pct: 90 },
      { label: 'Playwright Automation', pct: 85 },
      { label: 'CI/CD & Jenkins', pct: 80 },
      { label: 'TestNG & JUnit', pct: 92 },
    ],
    cta: 'Start SDET Path',
  },
  {
    icon: '💻', title: 'Live Code Editor', route: '/java', color: '#f59e0b',
    desc: 'Write and run Java code right inside the browser. Zero setup.',
    tagline: 'Open a lesson, type, hit Run — see output instantly. Nothing to install.',
    visual: 'code',
    code: `public class HelloSdet {
  public static void main(String[] args) {
    // Your SDET journey starts here
    System.out.println("Running tests...");
    assert 1 + 1 == 2 : "Math works!";
    System.out.println("All tests passed ✓");
  }
}`,
    cta: 'Try the Editor',
  },
  {
    icon: '📈', title: 'Progress Tracking', route: '/sdet', color: '#10b981',
    desc: 'Persistent lesson completion tracking across all courses and sessions.',
    tagline: 'Your achievements are saved forever — pick up right where you left off.',
    visual: 'bars',
    items: [
      { label: 'SDET Mastery', pct: 68 },
      { label: 'Java Development', pct: 45 },
      { label: 'Python Programming', pct: 80 },
      { label: 'SQL & Databases', pct: 33 },
    ],
    cta: 'View My Progress',
  },
  {
    icon: '⚡', title: 'Zero Buffering', route: '/python', color: '#06b6d4',
    desc: 'No paywall. Every lesson loads instantly with zero wait time.',
    tagline: 'No ads. No spinners. No friction. Just pure, fast learning.',
    visual: 'compare',
    rows: [
      { label: '🟢 TestForge', val: '< 0.1s load', good: true },
      { label: 'Typical MOOC', val: '3 – 8s + spinner', good: false },
      { label: 'YouTube', val: '2 – 5s + pre-roll ads', good: false },
      { label: 'Paid platforms', val: 'Paywall first', good: false },
    ],
    cta: 'Experience It Free',
  },
  {
    icon: '🧠', title: 'Project-Based', route: '/java', color: '#8b5cf6',
    desc: 'Real-world exercises and coding challenges in every chapter.',
    tagline: 'Build a portfolio while learning — not after. Employers love this.',
    visual: 'projects',
    projects: [
      { name: 'Selenium Test Suite', tech: 'Java · TestNG · Maven' },
      { name: 'REST API Tester', tech: 'Java · RestAssured · JSON' },
      { name: 'Automation Framework', tech: 'Python · Pytest · Selenium' },
      { name: 'DB Query Validator', tech: 'SQL · JDBC · JUnit' },
    ],
    cta: 'Start Building',
  },
  {
    icon: '🌐', title: 'Always Free', route: '/sql', color: '#10b981',
    desc: 'All courses are 100% free. No credit card. No subscription. Ever.',
    tagline: 'Premium quality, zero cost. No strings. No upsells. No surprises.',
    visual: 'compare',
    rows: [
      { label: '🟢 TestForge', val: '₹0 forever', good: true },
      { label: 'Udemy', val: '₹499 – ₹3,499 / course', good: false },
      { label: 'Coursera', val: '$49 / month', good: false },
      { label: 'LinkedIn Learning', val: '$19.99 / month', good: false },
    ],
    cta: 'Start Free Now',
  },
];

/* ── Feature Spotlight Modal ── */
function FeatureSpotlight({ feat, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fs-overlay" onClick={onClose}>
      <div className="fs-panel" style={{ '--fc': feat.color }} onClick={e => e.stopPropagation()}>
        <button className="fs-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="fs-icon-wrap">
          <span className="fs-icon">{feat.icon}</span>
          <span className="fs-color-ring" />
        </div>
        <h2 className="fs-title">{feat.title}</h2>
        <p className="fs-tagline">{feat.tagline}</p>

        <div className="fs-visual">
          {feat.visual === 'bars' && feat.items.map((it, i) => (
            <div key={i} className="fs-bar-row" style={{ animationDelay: (i * 0.07 + 0.1) + 's' }}>
              <span className="fs-bar-label">{it.label}</span>
              <div className="fs-bar-track">
                <div className="fs-bar-fill" style={{ '--w': it.pct + '%', animationDelay: (i * 0.1 + 0.25) + 's' }} />
              </div>
              <span className="fs-bar-pct">{it.pct}%</span>
            </div>
          ))}

          {feat.visual === 'code' && (
            <div className="fs-code-wrap">
              <div className="fs-code-header">
                <span className="fs-dot" style={{background:'#ff5f56'}} />
                <span className="fs-dot" style={{background:'#ffbd2e'}} />
                <span className="fs-dot" style={{background:'#27c93f'}} />
                <span className="fs-code-filename">HelloSdet.java</span>
              </div>
              <pre className="fs-code">{feat.code}</pre>
            </div>
          )}

          {feat.visual === 'compare' && feat.rows.map((r, i) => (
            <div key={i} className={`fs-cmp-row ${r.good ? 'fs-cmp-good' : 'fs-cmp-bad'}`}
              style={{ animationDelay: (i * 0.08 + 0.1) + 's' }}>
              <span className="fs-cmp-label">{r.label}</span>
              <span className="fs-cmp-val">{r.val}</span>
            </div>
          ))}

          {feat.visual === 'projects' && feat.projects.map((p, i) => (
            <div key={i} className="fs-proj-row" style={{ animationDelay: (i * 0.09 + 0.1) + 's' }}>
              <span className="fs-proj-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="fs-proj-info">
                <span className="fs-proj-name">{p.name}</span>
                <span className="fs-proj-tech">{p.tech}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="fs-cta" onClick={() => { onClose(); onNavigate(feat.route); }}>
          {feat.cta} →
        </button>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  { stars: 5, quote: '"TestForge helped me crack my first SDET role within 2 months. The content is top-notch!"',          name: 'Rajesh Kumar', role: 'SDET at Infosys',     av: '👨‍💼' },
  { stars: 5, quote: '"The Java + SQL combination was exactly what my interview needed. Crystal clear explanations."',         name: 'Priya Sharma', role: 'Java Developer',       av: '👩‍💻' },
  { stars: 5, quote: '"Unlike YouTube, every topic is structured here. Feels like a premium course — totally free!"',          name: 'Arjun Patel',  role: 'QA Lead, Capgemini',  av: '👨‍🎓' },
];

export default function Home() {
  const navigate = useNavigate();
  const { text: typed, idx: typedIdx } = useTypewriter();
  const coursesRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="lp-wrap">

      {/* ── HERO ── */}
      <section className="lp-hero">
        <Particles />
        <div className="lp-orb lp-orb1" />
        <div className="lp-orb lp-orb2" />
        <div className="lp-orb lp-orb3" />
        <div className="lp-dot-grid" />

        <div className="lp-hero-center">
          <span className="lp-pill">🚀 India's #1 Free Tech Learning Platform</span>
          <h1 className="lp-h1">
            <span className="lp-h1-master">Master</span>{' '}
            <span className="lp-typed">
              {typed}<span className="lp-cursor">|</span>
            </span>
          </h1>
          <p className="lp-hero-sub">
            Structured courses built for SDET &amp; Dev roles. Code in browser. Track progress. Start free.
          </p>
          <div className="lp-hero-btns">
            <button className="lp-btn-primary" onClick={() => coursesRef.current?.scrollIntoView({ behavior: 'smooth' })}>Start Learning Free →</button>
            <button className="lp-btn-ghost" onClick={() => navigate(TYPED_ROUTES[typedIdx])}>Explore {TYPED_LABELS[typedIdx]}</button>
          </div>
          <div className="lp-stats-row">
            <div className="lp-stat lp-stat--purple"><strong><Counter to={50000} suffix="+" /></strong><span>Learners</span></div>
            <div className="lp-stat-sep" />
            <div className="lp-stat lp-stat--orange"><strong>4</strong><span>Courses</span></div>
            <div className="lp-stat-sep" />
            <div className="lp-stat lp-stat--green"><strong><Counter to={500} suffix="+" /></strong><span>Lessons</span></div>
            <div className="lp-stat-sep" />
            <div className="lp-stat lp-stat--sky"><strong>4.9 ⭐</strong><span>Rating</span></div>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section ref={coursesRef} className="lp-section lp-bg2">
        <div className="lp-sec-label">COURSES</div>
        <h2 className="lp-sec-title">Choose Your Learning Path</h2>
        <p className="lp-sec-sub">Industry-aligned courses with exercises and progress tracking</p>
        <div className="lp-course-grid">
          {COURSES.map(c => (
            <div key={c.route} className="lp-card" style={{ '--ca': c.col }} onClick={() => navigate(c.route)}>
              <div className="lp-card-hd">
                <span className="lp-card-badge">{c.badge}</span>
                <span className="lp-card-icon">{c.icon}</span>
              </div>
              <h3 className="lp-card-title">{c.title}</h3>
              <p className="lp-card-desc">{c.desc}</p>
              <div className="lp-card-tags">{c.tags.map(t => <span key={t} className="lp-ctag">{t}</span>)}</div>
              <button className="lp-card-btn" onClick={e => { e.stopPropagation(); navigate(c.route); }}>Start Learning →</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="lp-section lp-bg1">
        <div className="lp-sec-label">WHY TESTFORGE</div>
        <h2 className="lp-sec-title">Built Different. Built for You.</h2>
        <p className="lp-sec-sub">Six reasons learners choose TestForge over every other platform</p>
        <div className="lp-feat-grid">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="lp-feat-card lp-feat-card--link"
              style={{'--fc': f.color}}
              onClick={() => setActiveFeature(f)} role="button" tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setActiveFeature(f)}>
              <div className="lp-feat-num">{String(i+1).padStart(2,'0')}</div>
              <div className="lp-feat-icon-wrap">
                <span className="lp-feat-icon">{f.icon}</span>
              </div>
              <h4 className="lp-feat-title">{f.title}</h4>
              <p className="lp-feat-desc">{f.desc}</p>
              <span className="lp-feat-arrow">Explore →</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="lp-section lp-bg2">
        <div className="lp-sec-label">TESTIMONIALS</div>
        <h2 className="lp-sec-title">What Our Learners Say</h2>
        <div className="lp-testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="lp-testi-card">
              <div className="lp-tc-stars">{'★'.repeat(t.stars)}</div>
              <p className="lp-tc-quote">{t.quote}</p>
              <div className="lp-tc-author">
                <div className="lp-tc-av">{t.av}</div>
                <div>
                  <div className="lp-tc-name">{t.name}</div>
                  <div className="lp-tc-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="lp-cta-strip">
        <h2 className="lp-cta-title">Ready to land your dream SDET role?</h2>
        <p className="lp-cta-sub">Join 50,000+ learners building real skills — completely free.</p>
        <button className="lp-btn-primary lp-cta-action" onClick={() => navigate('/sdet')}>Start Your Journey →</button>
      </section>

      {activeFeature && (
        <FeatureSpotlight feat={activeFeature} onClose={() => setActiveFeature(null)} onNavigate={navigate} />
      )}

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="lp-ftr-logo">⚒️ <span>TestForge</span></div>
        <p className="lp-ftr-tag">Master Testing &amp; Development Skills</p>
        <div className="lp-ftr-nav">
          {COURSES.map(c => <button key={c.route} onClick={() => navigate(c.route)}>{c.title.split(' ')[0]}</button>)}
        </div>
        <p className="lp-ftr-copy">© 2026 TestForge. All rights reserved.</p>
      </footer>

    </div>
  );
}
