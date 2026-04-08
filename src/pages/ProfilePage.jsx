import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { topics } from '../data/topics';
import { javaCourses } from '../data/javaData';
import { pythonCourses } from '../data/pythonData';
import { sqlCourses } from '../data/sqlData';

function countTotal(data, type) {
  if (type === 'sdet') {
    return Object.values(data).reduce((s, t) => s + (t.subtopics?.length || 0), 0);
  }
  // for javaCourses/pythonCourses/sqlCourses: { chapterId: { subtopics: [...] } }
  return Object.values(data).reduce((s, ch) => s + (ch.subtopics?.length || 0), 0);
}

const MODULES = [
  { key: 'sdet',   label: 'SDET',   icon: '✏️', color: '#7c3aed', bg: '#f5f0ff', prefix: 'sdet-',   data: topics,        type: 'sdet' },
  { key: 'java',   label: 'Java',   icon: '☕', color: '#f59e0b', bg: '#fffbeb', prefix: 'java-',   data: javaCourses,   type: 'course' },
  { key: 'python', label: 'Python', icon: '🐍', color: '#10b981', bg: '#ecfdf5', prefix: 'python-', data: pythonCourses, type: 'course' },
  { key: 'sql',    label: 'SQL',    icon: '🗄️', color: '#06b6d4', bg: '#ecfeff', prefix: 'sql-',    data: sqlCourses,    type: 'course' },
];

export default function ProfilePage() {
  const { user, logout, updateName, updateMobile } = useAuth();
  const { done } = useProgress();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'progress');

  // Name edit state
  const [editingName, setEditingName] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [saveMsg, setSaveMsg] = useState('');

  // Mobile edit state
  const [editingMobile, setEditingMobile] = useState(false);
  const [editMobile, setEditMobile] = useState(user?.mobile || '');
  const [mobileMsg, setMobileMsg] = useState('');

  // Sync tab when URL ?tab= changes (e.g. from dropdown)
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  if (!user) return null;

  const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  // Compute per-module stats
  const moduleStats = MODULES.map(m => {
    const total = countTotal(m.data, m.type);
    const completed = Object.keys(done).filter(k => k.startsWith(m.prefix)).length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { ...m, total, completed, pct };
  });

  const totalCompleted = moduleStats.reduce((s, m) => s + m.completed, 0);
  const totalLessons   = moduleStats.reduce((s, m) => s + m.total, 0);
  const overallPct     = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  async function handleSaveName(e) {
    e.preventDefault();
    const trimmed = editName.trim();
    if (!trimmed) return;
    const result = await updateName(trimmed);
    if (result.error) {
      setSaveMsg('❌ ' + result.error);
    } else {
      setSaveMsg('✅ Name updated!');
      setEditingName(false);
    }
    setTimeout(() => setSaveMsg(''), 3000);
  }

  async function handleSaveMobile(e) {
    e.preventDefault();
    const result = await updateMobile(editMobile.trim());
    if (result.error) {
      setMobileMsg('❌ ' + result.error);
    } else {
      setMobileMsg('✅ Mobile number updated!');
      setEditingMobile(false);
    }
    setTimeout(() => setMobileMsg(''), 3000);
  }

  return (
    <div className="pp-page">
      {/* Back button */}
      <button className="pp-back-btn" onClick={() => navigate(-1)}>← Back to Learning</button>

      {/* Profile Header */}
      <div className="pp-header">
        <div className="pp-avatar">{initials}</div>
        <div className="pp-header-info">
          <div className="pp-name">{user.name}</div>
          <div className="pp-email">{user.email}</div>
          <div className="pp-badge">🎓 TestForge Learner</div>
        </div>
        <div className="pp-overall-ring">
          <div className="pp-ring-label">{overallPct}%</div>
          <div className="pp-ring-sub">Overall</div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="pp-stats-row">
        <div className="pp-stat-card">
          <div className="pp-stat-num" style={{color:'#7c3aed'}}>{totalCompleted}</div>
          <div className="pp-stat-label">Lessons Done</div>
        </div>
        <div className="pp-stat-card">
          <div className="pp-stat-num" style={{color:'#10b981'}}>{totalLessons}</div>
          <div className="pp-stat-label">Total Lessons</div>
        </div>
        <div className="pp-stat-card">
          <div className="pp-stat-num" style={{color:'#f59e0b'}}>{moduleStats.filter(m => m.completed > 0).length}</div>
          <div className="pp-stat-label">Modules Started</div>
        </div>
        <div className="pp-stat-card">
          <div className="pp-stat-num" style={{color:'#06b6d4'}}>{moduleStats.filter(m => m.pct === 100).length}</div>
          <div className="pp-stat-label">Modules Completed</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="pp-tabs">
        <button className={`pp-tab${activeTab === 'progress' ? ' active' : ''}`} onClick={() => setActiveTab('progress')}>📊 My Progress</button>
        <button className={`pp-tab${activeTab === 'settings' ? ' active' : ''}`} onClick={() => setActiveTab('settings')}>⚙️ Settings</button>
      </div>

      {activeTab === 'progress' && (
        <div className="pp-section">
          <div className="pp-module-grid">
            {moduleStats.map(m => (
              <div key={m.key} className="pp-module-card" style={{'--mc': m.color, '--mb': m.bg}}>
                <div className="pp-mc-header">
                  <span className="pp-mc-icon">{m.icon}</span>
                  <span className="pp-mc-label">{m.label}</span>
                  <span className="pp-mc-pct" style={{color: m.color}}>{m.pct}%</span>
                </div>
                <div className="pp-mc-bar-track">
                  <div className="pp-mc-bar-fill" style={{width: `${m.pct}%`, background: m.color}} />
                </div>
                <div className="pp-mc-counts">{m.completed} / {m.total} lessons completed</div>
                {m.pct === 100 && <div className="pp-mc-badge">🏆 Completed!</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="pp-section">
          <div className="pp-settings-card">
            <h3 className="pp-settings-title">Account Settings</h3>

            {/* Display Name */}
            <div className="pp-settings-row">
              <label className="pp-settings-label">Display Name</label>
              {editingName ? (
                <form className="pp-settings-form pp-inline-form" onSubmit={handleSaveName}>
                  <input
                    className="pp-settings-input"
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    placeholder="Your name"
                    maxLength={40}
                    autoFocus
                  />
                  <div className="pp-edit-actions">
                    <button type="submit" className="pp-settings-save">Save</button>
                    <button type="button" className="pp-edit-cancel" onClick={() => { setEditingName(false); setEditName(user.name); }}>Cancel</button>
                  </div>
                </form>
              ) : (
                <div className="pp-settings-static-row">
                  <span className="pp-settings-static">{user.name}</span>
                  <button className="pp-edit-btn" onClick={() => setEditingName(true)}>✏️ Edit</button>
                </div>
              )}
              {saveMsg && <div className="pp-settings-msg">{saveMsg}</div>}
            </div>

            {/* Email */}
            <div className="pp-settings-row">
              <label className="pp-settings-label">Email</label>
              <div className="pp-settings-static">{user.email}</div>
            </div>

            {/* Mobile Number */}
            <div className="pp-settings-row">
              <label className="pp-settings-label">Mobile Number <span style={{color:'#9ca3af',fontSize:'0.8rem'}}>(optional)</span></label>
              {editingMobile ? (
                <form className="pp-settings-form pp-inline-form" onSubmit={handleSaveMobile}>
                  <input
                    className="pp-settings-input"
                    value={editMobile}
                    onChange={e => setEditMobile(e.target.value)}
                    placeholder="+91 98765 43210"
                    maxLength={20}
                    autoFocus
                  />
                  <div className="pp-edit-actions">
                    <button type="submit" className="pp-settings-save">Save</button>
                    <button type="button" className="pp-edit-cancel" onClick={() => { setEditingMobile(false); setEditMobile(user.mobile || ''); }}>Cancel</button>
                  </div>
                </form>
              ) : (
                <div className="pp-settings-static-row">
                  <span className="pp-settings-static">{user.mobile || <span style={{color:'#9ca3af'}}>Not added</span>}</span>
                  <button className="pp-edit-btn" onClick={() => setEditingMobile(true)}>✏️ {user.mobile ? 'Edit' : 'Add'}</button>
                </div>
              )}
              {mobileMsg && <div className="pp-settings-msg">{mobileMsg}</div>}
            </div>

            <hr className="pp-settings-sep" />

            <div className="pp-danger-zone">
              <div className="pp-danger-title">⚠️ Danger Zone</div>
              <button className="pp-danger-btn" onClick={() => {
                localStorage.removeItem('testforge_progress');
                window.location.reload();
              }}>Reset All Progress</button>
              <button className="pp-danger-btn pp-danger-logout" onClick={logout}>Log Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
