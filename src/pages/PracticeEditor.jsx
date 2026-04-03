import { useState, useRef } from 'react';
import { tracks } from '../data/practiceData';

function runJS(code) {
  const logs = [];
  const orig = console.log;
  console.log = (...args) => {
    logs.push(args.map(a =>
      typeof a === 'object' ? (() => { try { return JSON.stringify(a, null, 2); } catch { return String(a); } })() : String(a)
    ).join(' '));
  };
  try {
    // eslint-disable-next-line no-new-func
    new Function(code)();
    return { output: logs.join('\n') || '(no output)', error: null };
  } catch (e) {
    return { output: logs.join('\n'), error: e.message };
  } finally {
    console.log = orig;
  }
}

const diffColor = { Beginner: '#22c55e', Easy: '#22c55e', Intermediate: '#f59e0b', Medium: '#f59e0b', Advanced: '#ef4444', Hard: '#ef4444' };

export default function PracticeEditor() {
  const [activeTrack, setActiveTrack]   = useState(tracks[0].id);
  const [selectedIdx, setSelectedIdx]   = useState(0);
  const [code, setCode]                 = useState(tracks[0].challenges[0].starter);
  const [output, setOutput]             = useState('');
  const [runError, setRunError]         = useState(null);
  const [tab, setTab]                   = useState('task');
  const [showHint, setShowHint]         = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const textareaRef = useRef(null);

  const track     = tracks.find(t => t.id === activeTrack);
  const challenge = track.challenges[selectedIdx];
  const isJS      = track.lang === 'javascript';

  const switchTrack = (tid) => {
    const t = tracks.find(x => x.id === tid);
    setActiveTrack(tid); setSelectedIdx(0); setCode(t.challenges[0].starter);
    setOutput(''); setRunError(null); setShowHint(false); setShowSolution(false); setTab('task');
  };
  const selectChallenge = (idx) => {
    setSelectedIdx(idx); setCode(track.challenges[idx].starter);
    setOutput(''); setRunError(null); setShowHint(false); setShowSolution(false); setTab('task');
  };
  const handleRun = () => {
    if (!isJS) {
      setOutput('This is Java code — run it in your IDE.\n\nSelenium/API: IntelliJ IDEA + Maven\nPlaywright JS: VS Code + Node.js\n\nThe editor lets you write & study the patterns.');
      setRunError(null); return;
    }
    const r = runJS(code); setOutput(r.output); setRunError(r.error);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = textareaRef.current, s = ta.selectionStart;
      const n = code.substring(0, s) + '  ' + code.substring(ta.selectionEnd);
      setCode(n); setTimeout(() => { ta.selectionStart = ta.selectionEnd = s + 2; }, 0);
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') handleRun();
  };

  return (
    <div className="pe-root">
      <div className="pe-track-bar">
        {tracks.map(t => (
          <button key={t.id}
            className={`pe-track-btn ${activeTrack === t.id ? 'active' : ''}`}
            style={activeTrack === t.id ? { borderBottomColor: t.color, color: t.color } : {}}
            onClick={() => switchTrack(t.id)}
          >{t.label}</button>
        ))}
        <span className="pe-track-badge" style={{ background: track.color + '22', color: track.color }}>
          {track.lang === 'javascript' ? '🟡 Runs in Browser' : '☕ Copy to IDE'}
        </span>
      </div>
      <div className="pe-body">
        <div className="pe-list">
          <div className="pe-list-title">Challenges</div>
          {track.challenges.map((ch, idx) => (
            <div key={ch.id}
              className={`pe-list-item ${selectedIdx === idx ? 'active' : ''}`}
              style={selectedIdx === idx ? { borderLeftColor: track.color } : {}}
              onClick={() => selectChallenge(idx)}
            >
              <span className="pe-list-num">#{ch.id}</span>
              <div>
                <div className="pe-list-name">{ch.title}</div>
                <span className="pe-diff-badge"
                  style={{ background: diffColor[ch.difficulty] + '22', color: diffColor[ch.difficulty] }}
                >{ch.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pe-main">
          <div className="pe-main-header">
            <div>
              <h2 className="pe-title">{challenge.title}</h2>
              <span className="pe-diff-badge"
                style={{ background: diffColor[challenge.difficulty] + '22', color: diffColor[challenge.difficulty] }}
              >{challenge.difficulty}</span>
            </div>
            <div className="pe-header-actions">
              <button className="pe-tab-toggle" onClick={() => setTab(tab === 'theory' ? 'task' : 'theory')}>
                {tab === 'theory' ? '📝 Task' : '📚 Theory'}
              </button>
              <button className="pe-btn-hint" onClick={() => { setShowHint(!showHint); setShowSolution(false); }}>
                {showHint ? '🙈 Hide Hint' : '💡 Hint'}
              </button>
              <button className="pe-btn-solution" onClick={() => { setShowSolution(!showSolution); setShowHint(false); }}>
                {showSolution ? '🙈 Hide' : '🔑 Solution'}
              </button>
              <button className="pe-btn-reset" onClick={() => { setCode(challenge.starter); setOutput(''); setRunError(null); }}>
                ↺ Reset
              </button>
            </div>
          </div>
          {tab === 'theory'
            ? <TheoryPanel content={challenge.theory} color={track.color} />
            : <TaskPanel content={challenge.theory} />
          }
          {showHint && <div className="pe-hint">{challenge.hint}</div>}
          {showSolution && (
            <div className="pe-solution">
              <div className="pe-solution-label">✅ Solution</div>
              <pre className="pe-solution-code">{challenge.solution}</pre>
            </div>
          )}
          <div className="pe-editor-wrap">
            <div className="pe-editor-toolbar">
              <span className="pe-lang" style={{ color: track.color }}>
                {track.lang === 'javascript' ? 'JavaScript' : 'Java'}
              </span>
              <span className="pe-shortcut">
                {isJS ? 'Ctrl+Enter to run' : 'Copy → run in IntelliJ / VS Code'}
              </span>
            </div>
            <textarea ref={textareaRef} className="pe-textarea"
              value={code} onChange={e => setCode(e.target.value)}
              onKeyDown={handleKeyDown} spellCheck={false} autoComplete="off"
            />
          </div>
          <div className="pe-run-row">
            <button className="pe-run-btn"
              style={{ background: isJS ? track.color : '#475569' }}
              onClick={handleRun}
            >{isJS ? '▶ Run Code' : '📋 How to Run'}</button>
            {isJS && <span className="pe-run-note">Runs safely in your browser</span>}
          </div>
          {(output || runError) && (
            <div className="pe-console">
              <div className="pe-console-header">
                <span>Console</span>
                <button className="pe-console-clear" onClick={() => { setOutput(''); setRunError(null); }}>✕ Clear</button>
              </div>
              <div className="pe-console-body">
                {output && <pre className="pe-console-out">{output}</pre>}
                {runError && <pre className="pe-console-err">❌ {runError}</pre>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TheoryPanel({ content, color }) {
  return (
    <div className="pe-theory">
      {content.split('\n').map((line, i) => {
        if (line.startsWith('## '))  return <h2 key={i} className="pe-th-h2" style={{ borderColor: color }}>{line.slice(3)}</h2>;
        if (line.startsWith('### ')) return <h3 key={i} className="pe-th-h3" style={{ color }}>{line.slice(4)}</h3>;
        if (line.startsWith('```')) return null;
        if (line.startsWith('| ')) {
          const cells = line.split('|').filter(c => c.trim() && !c.match(/^[-\s]+$/));
          if (!cells.length) return null;
          return <div key={i} className="pe-th-tr">{cells.map((c, j) => <span key={j} className="pe-th-td">{c.trim()}</span>)}</div>;
        }
        if (line.startsWith('- ')) return <li key={i} className="pe-th-li">{renderInline(line.slice(2))}</li>;
        if (line.trim() === '')    return <div key={i} style={{ height: 8 }} />;
        return <p key={i} className="pe-th-p">{renderInline(line)}</p>;
      })}
    </div>
  );
}

function TaskPanel({ content }) {
  const lines = content.split('\n');
  const codeStart = lines.findIndex(l => l.startsWith('```'));
  const preview = lines.slice(0, codeStart > 0 ? Math.min(codeStart, 30) : 30).filter(l => !l.startsWith('##'));
  return (
    <div className="pe-task-desc">
      {preview.map((line, i) => {
        if (line.startsWith('### ')) return <strong key={i} className="pe-th-h3-sm">{line.slice(4)}</strong>;
        if (line.startsWith('- '))  return <li key={i} className="pe-th-li">{renderInline(line.slice(2))}</li>;
        if (line.trim() === '')     return null;
        return <p key={i} className="pe-th-p">{renderInline(line)}</p>;
      })}
    </div>
  );
}

function renderInline(text) {
  return text.split(/(`[^`]+`)/g).map((p, i) =>
    p.startsWith('`') && p.endsWith('`')
      ? <code key={i} className="pe-inline-code">{p.slice(1, -1)}</code>
      : p
  );
}
