import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import JavaSidebar from './components/JavaSidebar';
import Home from './pages/Home';
import SdetHome from './pages/SdetHome';
import TopicPage from './pages/TopicPage';
import PracticeEditor from './pages/PracticeEditor';
import JavaHome from './pages/JavaHome';
import JavaTopicPage from './pages/JavaTopicPage';
import JavaCodeEditor from './pages/JavaCodeEditor';
import { ProgressProvider } from './context/ProgressContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import CourseSidebar from './components/CourseSidebar';
import CourseTopicPage from './pages/CourseTopicPage';
import CourseHome from './pages/CourseHome';
import PythonHome from './pages/PythonHome';
import SQLHome from './pages/SqlHome';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { pythonCourses } from './data/pythonData';
import { sqlCourses } from './data/sqlData';
import './App.css';

function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  if (!user) {
    return (
      <button className="header-login-btn" onClick={() => navigate('/login')}>
        Log In
      </button>
    );
  }

  const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="user-menu" ref={menuRef}>
      <button className="user-avatar" onClick={() => setOpen(o => !o)} title={user.name}>
        {initials}
      </button>
      {open && (
        <div className="user-dropdown">
          <div className="user-dropdown-name">{user.name}</div>
          <div className="user-dropdown-email">{user.email}</div>
          <hr className="user-dropdown-sep" />
          <button className="user-dropdown-item" onClick={() => { navigate('/profile'); setOpen(false); }}>
            👤 View Profile
          </button>
          <button className="user-dropdown-item" onClick={() => { navigate('/profile?tab=progress'); setOpen(false); }}>
            📊 My Progress
          </button>
          <button className="user-dropdown-item" onClick={() => { navigate('/profile?tab=settings'); setOpen(false); }}>
            ⚙️ Settings
          </button>
          <hr className="user-dropdown-sep" />
          <button
            className="user-dropdown-logout"
            onClick={() => { logout(); setOpen(false); }}
          >
            🚪 Log Out
          </button>
        </div>
      )}
    </div>
  );
}

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
    // also scroll the main-content panel if it exists
    const main = document.querySelector('.main-content');
    if (main) main.scrollTop = 0;
  }, [location.pathname]);

  // Close sidebar whenever the route changes (user navigated)
  useEffect(() => { setSidebarOpen(false); }, [location.pathname]);

  return (
    <div className="app-layout" data-sidebar-open={sidebarOpen}>
      <header className="app-header">
        <Link to="/" className="logo">
          <span className="logo-icon">🎓</span>
          <span>TestForge</span>
        </Link>
        <button
          className="hamburger"
          onClick={() => setSidebarOpen(s => !s)}
          aria-label="Toggle navigation"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <nav className="header-nav">
          <Link to="/sdet"   className="header-link header-link--sdet">✏️ SDET</Link>
          <Link to="/java"   className="header-link header-link--java">☕ Java</Link>
          <Link to="/python" className="header-link header-link--python">🐍 Python</Link>
          <Link to="/sql"    className="header-link header-link--sql">🗄️ SQL</Link>
        </nav>
        <UserMenu />
      </header>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="app-body">
        <Routes>
          <Route path="/" element={<main className="landing-main"><Home /></main>} />
          <Route path="/sdet" element={<><Sidebar /><main className="main-content"><SdetHome /></main></>} />
          <Route
            path="/topic/:topicKey/:subtopicId"
            element={<><Sidebar /><main className="main-content"><TopicPage /></main></>}
          />
          <Route
            path="/practice"
            element={<><Sidebar /><PracticeEditor /></>}
          />
          <Route path="/java" element={<><JavaSidebar /><main className="main-content"><JavaHome /></main></>} />
          <Route
            path="/java/:chapterId/:lessonId"
            element={<><JavaSidebar /><main className="main-content"><JavaTopicPage /></main></>}
          />
          <Route
            path="/java/editor"
            element={<><JavaSidebar /><main className="main-content jce-main"><JavaCodeEditor /></main></>}
          />
          <Route path="/python" element={<><CourseSidebar courses={pythonCourses} baseRoute="/python" prefix="python" title="🐍 Python" /><main className="main-content"><PythonHome /></main></>} />
          <Route path="/python/:chapterId/:lessonId" element={<><CourseSidebar courses={pythonCourses} baseRoute="/python" prefix="python" title="🐍 Python" /><main className="main-content"><CourseTopicPage courses={pythonCourses} baseRoute="/python" prefix="python" /></main></>} />
          <Route path="/sql" element={<><CourseSidebar courses={sqlCourses} baseRoute="/sql" prefix="sql" title="🗄️ SQL" /><main className="main-content"><SQLHome /></main></>} />
          <Route path="/sql/:chapterId/:lessonId" element={<><CourseSidebar courses={sqlCourses} baseRoute="/sql" prefix="sql" title="🗄️ SQL" /><main className="main-content"><CourseTopicPage courses={sqlCourses} baseRoute="/sql" prefix="sql" /></main></>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<main className="landing-main"><ProfilePage /></main>} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/SDET-HUB">
      <AuthProvider>
        <ProgressProvider>
          <AppContent />
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
