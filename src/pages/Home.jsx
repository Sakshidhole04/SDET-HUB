import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

/* ── Typewriter ── */
const TYPED = ['Automation Testing', 'Java Development', 'Python Scripting', 'SQL Mastery', 'SDET Skills'];

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
  return text;
}

/* ── Floating code particles (canvas) ── */
const SYMS   = ['{ }', '=>', '</>', 'if()', '[ ]', 'SQL', 'fn()', '++', '===', 'def', 'class', 'npm', 'git', 'API', 'for'];
const PCOLS  = ['#6366f1', '#8b5cf6', '#3b82f6', '#06b6d4', '#10b981'];

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
  { route: '/sdet',   icon: '🧪', title: 'SDET Mastery',      desc: 'Selenium, Playwright, API testing & CI/CD pipelines.',             col: '#6366f1', tags: ['Job Ready',    'Hands-on'],         badge: '🔥 Most Popular' },
  { route: '/java',   icon: '☕', title: 'Java Development',   desc: 'Core Java, Spring Boot & Microservices architecture.',              col: '#f59e0b', tags: ['Enterprise',   'In Demand'],         badge: '⭐ Top Rated'    },
  { route: '/python', icon: '🐍', title: 'Python Programming', desc: 'OOP, automation, modules and scripting for real-world use.',         col: '#10b981', tags: ['Beginner',     'Versatile'],         badge: '🚀 Trending'     },
  { route: '/sql',    icon: '🗄️', title: 'SQL & Databases',    desc: 'Queries, joins, subqueries & database testing for SDET roles.',      col: '#06b6d4', tags: ['SDET Essential','Practical'],        badge: '✅ Must Learn'   },
];

const FEATURES = [
  { icon: '🎯', title: 'SDET Focused',      desc: 'Every course is designed with Software Testing & Dev Engineering roles in mind.',  route: '/sdet' },
  { icon: '💻', title: 'Live Code Editor',  desc: 'Write and run Java code right inside the browser. Zero setup.',                  route: '/java' },
  { icon: '📈', title: 'Progress Tracking', desc: 'Persistent lesson completion tracking across all courses and sessions.',          route: '/sdet' },
  { icon: '⚡', title: 'Zero Buffering',    desc: 'No paywall. Every lesson loads instantly with zero wait time.',                  route: '/python' },
  { icon: '🧠', title: 'Project-Based',     desc: 'Real-world exercises and coding challenges in every chapter.',                   route: '/java' },
  { icon: '🌐', title: 'Always Free',       desc: 'All courses are 100% free. No credit card. No subscription. Ever.',              route: '/sql' },
];

const TESTIMONIALS = [
  { stars: 5, quote: '"Medhasphere helped me crack my first SDET role within 2 months. The content is top-notch!"',          name: 'Rajesh Kumar', role: 'SDET at Infosys',     av: '👨‍💼' },
  { stars: 5, quote: '"The Java + SQL combination was exactly what my interview needed. Crystal clear explanations."',         name: 'Priya Sharma', role: 'Java Developer',       av: '👩‍💻' },
  { stars: 5, quote: '"Unlike YouTube, every topic is structured here. Feels like a premium course — totally free!"',          name: 'Arjun Patel',  role: 'QA Lead, Capgemini',  av: '👨‍🎓' },
];

export default function Home() {
  const navigate = useNavigate();
  const typed = useTypewriter();
  const coursesRef = useRef(null);

  return (
    <div className="lp-wrap">

      {/* ── HERO ── */}
      <section className="lp-hero">
        <Particles />
        <div className="lp-orb lp-orb1" />
        <div className="lp-orb lp-orb2" />
        <div className="lp-orb lp-orb3" />
        <div className="lp-hero-center">
          <span className="lp-pill">🚀 India's #1 Free Tech Learning Platform</span>
          <h1 className="lp-h1">
            Master{' '}
            <span className="lp-typed">
              {typed}<span className="lp-cursor">|</span>
            </span>
          </h1>
          <p className="lp-hero-sub">
            Structured courses built for SDET &amp; Dev roles. Code in browser. Track progress. Start free.
          </p>
          <div className="lp-hero-btns">
            <button className="lp-btn-primary" onClick={() => coursesRef.current?.scrollIntoView({ behavior: 'smooth' })}>Start Learning Free →</button>
            <button className="lp-btn-ghost"   onClick={() => navigate('/java')}>Explore Java</button>
          </div>
          <div className="lp-stats-row">
            <div className="lp-stat"><strong><Counter to={50000} suffix="+" /></strong><span>Learners</span></div>
            <div className="lp-stat-sep" />
            <div className="lp-stat"><strong>4</strong><span>Courses</span></div>
            <div className="lp-stat-sep" />
            <div className="lp-stat"><strong><Counter to={500} suffix="+" /></strong><span>Lessons</span></div>
            <div className="lp-stat-sep" />
            <div className="lp-stat"><strong>4.9 ⭐</strong><span>Rating</span></div>
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
        <div className="lp-sec-label">WHY MEDHASPHERE</div>
        <h2 className="lp-sec-title">Built Different. Built for You.</h2>
        <div className="lp-feat-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="lp-feat-card lp-feat-card--link" onClick={() => navigate(f.route)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && navigate(f.route)}>
              <div className="lp-feat-icon">{f.icon}</div>
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

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="lp-ftr-logo">📚 <span>Medhasphere</span></div>
        <p className="lp-ftr-tag">Master Testing &amp; Development Skills</p>
        <div className="lp-ftr-nav">
          {COURSES.map(c => <button key={c.route} onClick={() => navigate(c.route)}>{c.title.split(' ')[0]}</button>)}
        </div>
        <p className="lp-ftr-copy">© 2025 Medhasphere. All rights reserved.</p>
      </footer>

    </div>
  );
}
