import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import JavaSidebar from './components/JavaSidebar';
import Home from './pages/Home';
import SdetHome from './pages/SdetHome';
import TopicPage from './pages/TopicPage';
import PracticeEditor from './pages/PracticeEditor';
import JavaHome from './pages/JavaHome';
import JavaTopicPage from './pages/JavaTopicPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <header className="app-header">
          <Link to="/" className="logo">
            <span className="logo-icon">🎓</span>
            <span>Medhasphere</span>
          </Link>
          <nav className="header-nav">
            <Link to="/sdet" className="header-link">✏️ SDET</Link>
            <Link to="/java" className="header-link">☕ Java Development</Link>
          </nav>
        </header>
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );


}
