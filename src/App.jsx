import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
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
import './App.css';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar whenever the route changes (user navigated)
  useEffect(() => { setSidebarOpen(false); }, [location.pathname]);

  return (
    <div className="app-layout" data-sidebar-open={sidebarOpen}>
      <header className="app-header">
        <Link to="/" className="logo">
          <span className="logo-icon">🎓</span>
          <span>Medhasphere</span>
        </Link>
        <button
          className="hamburger"
          onClick={() => setSidebarOpen(s => !s)}
          aria-label="Toggle navigation"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <nav className="header-nav">
          <Link to="/sdet" className="header-link">✏️ SDET</Link>
          <Link to="/java" className="header-link">☕ Java</Link>
        </nav>
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
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </BrowserRouter>
  );
}
