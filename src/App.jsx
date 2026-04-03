import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import PracticeEditor from './pages/PracticeEditor';
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
            <Link to="/topic/selenium/1" className="header-link">✏️ SDET</Link>
            <Link to="/practice" className="header-link">☕ Java Development</Link>
          </nav>
        </header>
        <div className="app-body">
          <Routes>
            <Route path="/" element={<main className="landing-main"><Home /></main>} />
            <Route
              path="/topic/:topicKey/:subtopicId"
              element={<><Sidebar /><main className="main-content"><TopicPage /></main></>}
            />
            <Route
              path="/practice"
              element={<><Sidebar /><PracticeEditor /></>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );


}
