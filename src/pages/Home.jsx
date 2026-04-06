import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/hero.png';

const courses = [
  {
    route: '/sdet',
    icon: '🧪',
    title: 'SDET Mastery',
    desc: 'Master automation testing with Selenium, Playwright, API testing & CI/CD pipelines.',
    tags: ['Industry Ready', 'Job Oriented', 'Hands-on'],
    badge: '🔥 Most Popular',
    badgeClass: 'badge-popular',
  },
  {
    route: '/java',
    icon: '☕',
    title: 'Java Development',
    desc: 'Build enterprise-grade applications with Core Java, Spring Boot & Microservices.',
    tags: ['Future Ready', 'Enterprise Level', 'In Demand'],
    badge: '⭐ Top Rated',
    badgeClass: 'badge-top',
  },
  {
    route: '/python',
    icon: '🐍',
    title: 'Python Programming',
    desc: 'From variables to OOP, file handling, modules and automation scripting.',
    tags: ['Beginner Friendly', 'Versatile', 'Automation'],
    badge: '🚀 Trending',
    badgeClass: 'badge-trend',
  },
  {
    route: '/sql',
    icon: '🗄️',
    title: 'SQL & Databases',
    desc: 'Master queries, joins, subqueries & database testing for SDET roles.',
    tags: ['SDET Essential', 'Practical', 'In Demand'],
    badge: '✅ Must Learn',
    badgeClass: 'badge-must',
  },
];

const testimonials = [
  {
    stars: 5,
    quote: '"Medhasphere helped me transition from manual testing to automation within 3 months!"',
    avatar: '👨‍💼',
    name: 'Rajesh Kumar',
    role: 'QA Engineer',
  },
  {
    stars: 5,
    quote: '"The structured learning path and practical exercises made Java concepts crystal clear."',
    avatar: '👩‍💻',
    name: 'Priya Sharma',
    role: 'Java Developer',
  },
  {
    stars: 5,
    quote: '"Best platform for learning SDET fundamentals. Highly recommended for career growth!"',
    avatar: '👨‍🎓',
    name: 'Arjun Patel',
    role: 'SDET Specialist',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">

      {/* ── HERO ── */}
      <section className="home-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <h1 className="home-hero-title">Welcome to Medhasphere</h1>
          <p className="home-hero-sub">Master Testing &amp; Development Skills with Expert Guidance.</p>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="home-section">
        <h2 className="home-section-title">Choose Your Learning Path</h2>
        <div className="home-course-grid">
          {courses.map(c => (
            <div key={c.route} className="hc-card" onClick={() => navigate(c.route)}>
              <span className={`hc-badge ${c.badgeClass}`}>{c.badge}</span>
              <div className="hc-icon">{c.icon}</div>
              <h3 className="hc-title">{c.title}</h3>
              <p className="hc-desc">{c.desc}</p>
              <div className="hc-tags">
                {c.tags.map(t => <span key={t} className="hc-tag">{t}</span>)}
              </div>
              <button
                className="hc-btn"
                onClick={e => { e.stopPropagation(); navigate(c.route); }}
              >
                Start Learning →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="home-section home-section-light">
        <h2 className="home-section-title">⭐ What Our Learners Say</h2>
        <div className="home-testimonials">
          {testimonials.map((t, i) => (
            <div key={i} className="ht-card">
              <div className="ht-stars">{'★'.repeat(t.stars)}</div>
              <p className="ht-quote">{t.quote}</p>
              <div className="ht-author">
                <div className="ht-avatar">{t.avatar}</div>
                <div>
                  <div className="ht-name">{t.name}</div>
                  <div className="ht-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="home-footer">
        <div className="home-footer-logo">📚 <span>Medhasphere</span></div>
        <p className="home-footer-tagline">Master Testing &amp; Development Skills</p>
        <p className="home-footer-copy">© 2025 Medhasphere. All rights reserved.</p>
      </footer>

    </div>
  );
}
