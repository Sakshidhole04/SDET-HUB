import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
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
            <Link to="/" className="header-link active">✅ SDET</Link>
            <a href="#" className="header-link">☕ Java Development</a>
          </nav>
        </header>
        <div className="app-body">
          <Routes>
            <Route path="/" element={<><Sidebar /><main className="main-content"><Home /></main></>} />
            <Route
              path="/topic/:topicKey/:subtopicId"
              element={<><Sidebar /><main className="main-content"><TopicPage /></main></>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );


}
