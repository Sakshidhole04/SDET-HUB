import { useState } from 'react';
import Editor from '@monaco-editor/react';

const DEFAULT_CODE = `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Hello World
        System.out.println("Hello, World!");

        // Variables & arithmetic
        int a = 10, b = 3;
        System.out.println("a + b = " + (a + b));
        System.out.println("a % b = " + (a % b));

        // String operations
        String msg = "Java is awesome!";
        System.out.println(msg.toUpperCase());
        System.out.println("Length: " + msg.length());

        // Loop example
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}`;

const SNIPPETS = [
  {
    label: 'Hello World',
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    label: 'For Loop',
    code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}`,
  },
  {
    label: 'Array & Sort',
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] nums = {5, 2, 8, 1, 9, 3};
        Arrays.sort(nums);
        System.out.println("Sorted: " + Arrays.toString(nums));
    }
}`,
  },
  {
    label: 'Scanner Input',
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Hello, " + name + "!");
        sc.close();
    }
}`,
  },
  {
    label: 'OOP Example',
    code: `public class Main {
    static class Animal {
        String name;
        Animal(String name) { this.name = name; }
        void speak() { System.out.println(name + " makes a sound."); }
    }

    static class Dog extends Animal {
        Dog(String name) { super(name); }
        @Override
        void speak() { System.out.println(name + " says: Woof!"); }
    }

    public static void main(String[] args) {
        Animal a = new Animal("Generic Animal");
        Dog d = new Dog("Buddy");
        a.speak();
        d.speak();
    }
}`,
  },
  {
    label: 'Fibonacci',
    code: `public class Main {
    static int fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {
        System.out.println("Fibonacci sequence:");
        for (int i = 0; i < 10; i++) {
            System.out.print(fib(i) + " ");
        }
        System.out.println();
    }
}`,
  },
];

export default function JavaCodeEditor() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('idle'); // idle | running | success | error
  const [runTime, setRunTime] = useState(null);
  const [activeSnippet, setActiveSnippet] = useState(null);

  const runCode = async () => {
    setStatus('running');
    setOutput('');
    setRunTime(null);
    const start = Date.now();
    try {
      const res = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: 'java',
          version: '*',
          files: [{ name: 'Main.java', content: code }],
          stdin: input,
        }),
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      const elapsed = ((Date.now() - start) / 1000).toFixed(2);
      setRunTime(elapsed);

      const compileStderr = data.compile?.stderr || '';
      const runStdout = data.run?.stdout || '';
      const runStderr = data.run?.stderr || '';
      const runCode2 = data.run?.code ?? 0;

      if (compileStderr) {
        setOutput(`Compilation Error:\n\n${compileStderr}`);
        setStatus('error');
      } else if (runCode2 !== 0 && runStderr) {
        setOutput(`Runtime Error:\n\n${runStderr}`);
        setStatus('error');
      } else {
        const out = runStdout + (runStderr ? `\n[stderr]\n${runStderr}` : '');
        setOutput(out || '(no output)');
        setStatus('success');
      }
    } catch (err) {
      setOutput(`Network Error: ${err.message}\n\nMake sure you are connected to the internet.`);
      setStatus('error');
      setRunTime(null);
    }
  };

  const loadSnippet = (snippet, index) => {
    setCode(snippet.code);
    setActiveSnippet(index);
    setOutput('');
    setStatus('idle');
    setRunTime(null);
  };

  const clearOutput = () => {
    setOutput('');
    setStatus('idle');
    setRunTime(null);
  };

  return (
    <div className="jce-page">
      {/* Header */}
      <div className="jce-header">
        <div className="jce-title">
          <span className="jce-title-icon">☕</span>
          <div>
            <h1 className="jce-title-text">Java Code Editor</h1>
            <p className="jce-title-sub">Write, compile &amp; run Java code in your browser</p>
          </div>
          <span className="jce-online-badge">● Online</span>
        </div>
        <div className="jce-header-actions">
          {status === 'success' && runTime && (
            <span className="jce-runtime">⚡ {runTime}s</span>
          )}
          <button
            className={`jce-run-btn${status === 'running' ? ' running' : ''}`}
            onClick={runCode}
            disabled={status === 'running'}
          >
            {status === 'running' ? '⏳ Running...' : '▶ Run Code'}
          </button>
        </div>
      </div>

      {/* Snippets Bar */}
      <div className="jce-snippets-bar">
        <span className="jce-snippets-label">Quick Start:</span>
        {SNIPPETS.map((s, i) => (
          <button
            key={i}
            className={`jce-snippet-btn${activeSnippet === i ? ' active' : ''}`}
            onClick={() => loadSnippet(s, i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Editor + Output Layout */}
      <div className="jce-workspace">
        {/* Left: Editor */}
        <div className="jce-editor-panel">
          <div className="jce-panel-header">
            <span className="jce-panel-title">📝 Editor — Main.java</span>
          </div>
          <Editor
            height="440px"
            language="java"
            theme="vs-dark"
            value={code}
            onChange={val => setCode(val || '')}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 4,
              lineNumbers: 'on',
              folding: true,
              wordWrap: 'off',
              renderLineHighlight: 'all',
              cursorBlinking: 'smooth',
              smoothScrolling: true,
              padding: { top: 12, bottom: 12 },
            }}
          />
          {/* Stdin */}
          <div className="jce-stdin-row">
            <label className="jce-stdin-label">📥 Program Input (stdin)</label>
            <textarea
              className="jce-stdin"
              placeholder="Enter input for your program (e.g. values for Scanner)..."
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={2}
            />
          </div>
        </div>

        {/* Right: Output */}
        <div className="jce-output-panel">
          <div className="jce-panel-header">
            <span className="jce-panel-title">
              📤 Output
              {status === 'success' && <span className="jce-badge-ok">✓ Success</span>}
              {status === 'error' && <span className="jce-badge-err">✗ Error</span>}
            </span>
            {output && (
              <button className="jce-clear-btn" onClick={clearOutput}>Clear</button>
            )}
          </div>
          <pre className="jce-output">
            {status === 'idle' && (
              <span className="jce-output-hint">
                {'// '}Click <strong>▶ Run Code</strong> to execute your Java program.{'\n'}
                {'// '}Your output will appear here.
              </span>
            )}
            {status === 'running' && (
              <span className="jce-output-hint">⏳ Compiling and running your code...</span>
            )}
            {(status === 'success' || status === 'error') && (
              <span className={status === 'error' ? 'jce-output-error' : ''}>{output}</span>
            )}
          </pre>

          {/* Info Box */}
          <div className="jce-info-box">
            <p>💡 <strong>Tips:</strong></p>
            <ul>
              <li>Your class must be named <code>Main</code></li>
              <li>Use <code>Scanner(System.in)</code> with the stdin field above</li>
              <li>Execution timeout: ~30 seconds</li>
              <li>Powered by <strong>Piston API</strong> (free, no signup)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
