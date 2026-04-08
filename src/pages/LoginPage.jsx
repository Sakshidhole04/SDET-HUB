import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login, signup, forgotPassword } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState('login'); // 'login' | 'signup' | 'forgot'
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [forgotEmail, setForgotEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.email || !form.password) return setError('Please fill in all fields.');
    if (mode === 'signup' && !form.name.trim()) return setError('Please enter your name.');
    if (form.password.length < 6) return setError('Password must be at least 6 characters.');

    setLoading(true);
    const result = await (mode === 'login'
      ? login(form.email, form.password)
      : signup(form.name.trim(), form.email, form.password));
    setLoading(false);

    if (result.error) return setError(result.error);

    if (mode === 'signup') {
      const signedEmail = form.email;
      setMode('login');
      setForm({ name: '', email: signedEmail, password: '' });
      setSuccess('🎉 Account created! A welcome email has been sent. Please log in below to start learning.');
      return;
    }

    navigate('/');
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!forgotEmail.trim()) return setError('Please enter your email address.');
    setLoading(true);
    const result = await forgotPassword(forgotEmail.trim());
    setLoading(false);
    if (result.error) return setError(result.error);
    setSuccess('📧 If that email is registered, a reset link has been sent. Check your inbox (and spam folder).');
  };

  const toggle = () => {
    setMode(m => m === 'login' ? 'signup' : 'login');
    setError('');
    setSuccess('');
    setForm({ name: '', email: '', password: '' });
  };

  return (
    <div className="auth-page">
      {/* left decorative panel */}
      <div className="auth-left">
        <div className="auth-left-inner">
          <Link to="/" className="auth-logo">🎓 TestForge</Link>
          <h2 className="auth-tagline">Master SDET &amp;<br />Dev Skills. Free.</h2>
          <p className="auth-sub">Structured courses for Selenium, Java, Python, SQL — all in one place.</p>
          <div className="auth-features">
            <div className="auth-feat"><span>✓</span> 4 Complete Courses</div>
            <div className="auth-feat"><span>✓</span> 500+ Lessons</div>
            <div className="auth-feat"><span>✓</span> Code in Browser</div>
            <div className="auth-feat"><span>✓</span> Track Progress</div>
            <div className="auth-feat"><span>✓</span> 100% Free</div>
          </div>
        </div>
      </div>

      {/* right form panel */}
      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-card-header">
            <h1 className="auth-title">
              {mode === 'login' ? 'Welcome back 👋' : mode === 'signup' ? 'Create account 🚀' : 'Forgot Password 🔑'}
            </h1>
            <p className="auth-desc">
              {mode === 'login'
                ? 'Log in to continue your learning journey.'
                : mode === 'signup'
                ? 'Join thousands learning SDET & dev skills for free.'
                : 'Enter your email and we\'ll send a reset link.'}
            </p>
          </div>

          {/* Forgot password form */}
          {mode === 'forgot' ? (
            <>
              <form className="auth-form" onSubmit={handleForgot} noValidate>
                <div className="auth-field">
                  <label className="auth-label">Email</label>
                  <input
                    className="auth-input"
                    type="email"
                    placeholder="you@example.com"
                    value={forgotEmail}
                    onChange={e => setForgotEmail(e.target.value)}
                    autoFocus
                    autoComplete="email"
                  />
                </div>
                {error && <div className="auth-error">{error}</div>}
                {success && <div className="auth-success">{success}</div>}
                <button className="auth-submit" type="submit" disabled={loading}>
                  {loading ? 'Sending…' : 'Send Reset Email →'}
                </button>
              </form>
              <div className="auth-switch">
                Remember your password?{' '}
                <button className="auth-switch-btn" onClick={() => { setMode('login'); setError(''); setSuccess(''); }}>
                  Back to Login
                </button>
              </div>
            </>
          ) : (
            <>
              <form className="auth-form" onSubmit={handleSubmit} noValidate>
                {mode === 'signup' && (
                  <div className="auth-field">
                    <label className="auth-label">Full Name</label>
                    <input
                      className="auth-input"
                      type="text"
                      placeholder="Sakshi Dhole"
                      value={form.name}
                      onChange={set('name')}
                      autoComplete="name"
                    />
                  </div>
                )}
                <div className="auth-field">
                  <label className="auth-label">Email</label>
                  <input
                    className="auth-input"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={set('email')}
                    autoComplete="email"
                  />
                </div>
                <div className="auth-field">
                  <label className="auth-label">Password</label>
                  <input
                    className="auth-input"
                    type="password"
                    placeholder={mode === 'signup' ? 'At least 6 characters' : '••••••••'}
                    value={form.password}
                    onChange={set('password')}
                    autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  />
                  {mode === 'login' && (
                    <button
                      type="button"
                      className="auth-forgot-link"
                      onClick={() => { setMode('forgot'); setForgotEmail(form.email); setError(''); setSuccess(''); }}
                    >
                      Forgot password?
                    </button>
                  )}
                </div>

                {error && <div className="auth-error">{error}</div>}
                {success && <div className="auth-success">{success}</div>}

                <button className="auth-submit" type="submit" disabled={loading}>
                  {loading ? 'Please wait…' : mode === 'login' ? 'Log In →' : 'Create Account →'}
                </button>
              </form>

              <div className="auth-switch">
                {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button className="auth-switch-btn" onClick={toggle}>
                  {mode === 'login' ? 'Sign Up' : 'Log In'}
                </button>
              </div>

              <Link to="/" className="auth-skip">Continue without account →</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

