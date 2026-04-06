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
import CourseSidebar from './components/CourseSidebar';
import CourseTopicPage from './pages/CourseTopicPage';
import CourseHome from './pages/CourseHome';
import PythonHome from './pages/PythonHome';
import SQLHome from './pages/SqlHome';
import { pythonCourses } from './data/pythonData';
import { sqlCourses } from './data/sqlData';
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
          <Link to="/sdet" className="header-link">✏️ SDET</Link>
          <Link to="/java" className="header-link">☕ Java</Link>
          <Link to="/python" className="header-link">🐍 Python</Link>
          <Link to="/sql" className="header-link">🗄️ SQL</Link>
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
          <Route path="/python" element={<><CourseSidebar courses={pythonCourses} baseRoute="/python" prefix="python" title="🐍 Python" /><main className="main-content"><PythonHome /></main></>} />
          <Route path="/python/:chapterId/:lessonId" element={<><CourseSidebar courses={pythonCourses} baseRoute="/python" prefix="python" title="🐍 Python" /><main className="main-content"><CourseTopicPage courses={pythonCourses} baseRoute="/python" prefix="python" /></main></>} />
          <Route path="/sql" element={<><CourseSidebar courses={sqlCourses} baseRoute="/sql" prefix="sql" title="🗄️ SQL" /><main className="main-content"><SQLHome /></main></>} />
          <Route path="/sql/:chapterId/:lessonId" element={<><CourseSidebar courses={sqlCourses} baseRoute="/sql" prefix="sql" title="🗄️ SQL" /><main className="main-content"><CourseTopicPage courses={sqlCourses} baseRoute="/sql" prefix="sql" /></main></>} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/SDET-HUB">
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </BrowserRouter>
  );
}
