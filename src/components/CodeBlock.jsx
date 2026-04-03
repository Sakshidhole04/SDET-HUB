import { useState } from 'react';

export default function CodeBlock({ className, children }) {
  const [copied, setCopied] = useState(false);

  const language = className?.replace('language-', '') || 'code';
  const code = String(children).replace(/\n$/, '');

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // fallback for older browsers
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="cb-wrapper">
      <div className="cb-header">
        <span className="cb-lang">{language}</span>
        <button className={`cb-copy${copied ? ' copied' : ''}`} onClick={copy}>
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <pre className="cb-pre">
        <code className={className}>{code}</code>
      </pre>
    </div>
  );
}
