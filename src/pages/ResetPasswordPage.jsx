import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const email = decodeURIComponent(searchParams.get('email') || '');

  const [status, setStatus] = useState('verifying'); // verifying | valid | invalid | success
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token || !email) { setStatus('invalid'); return; }
    supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .eq('reset_token', token)
      .gte('reset_token_expires', new Date().toISOString())
      .maybeSingle()
      .then(({ data }) => setStatus(data ? 'valid' : 'invalid'));
  }, [token, email]);

  async function handleReset(e) {
    e.preventDefault();
    setError('');
    if (form.password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (form.password !== form.confirm) { setError('Passwords do not match.'); return; }

    setLoading(true);
    const { error: err } = await supabase
      .from('users')
      .update({ password: form.password, reset_token: null, reset_token_expires: null })
      .eq('email', email)
      .eq('reset_token', token);
    setLoading(false);

    if (err) { setError('Failed to reset password. Please try again.'); return; }
    setStatus('success');
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-inner">
          <Link to="/" className="auth-logo">🎓 TestForge</Link>
          <h2 className="auth-tagline">Secure<br />Password Reset</h2>
          <p className="auth-sub">Enter your new password below to regain access to your TestForge account.</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          {status === 'verifying' && (
            <>
              <div className="auth-card-header">
                <h1 className="auth-title">Verifying link…</h1>
                <p className="auth-desc">Please wait while we verify your reset link.</p>
              </div>
              <div style={{textAlign:'center',padding:'24px',color:'#7c6fa0',fontSize:'32px'}}>⏳</div>
            </>
          )}

          {status === 'invalid' && (
            <>
              <div className="auth-card-header">
                <h1 className="auth-title">Link Expired</h1>
                <p className="auth-desc">This reset link is invalid or has expired (links expire after 1 hour).</p>
              </div>
              <div className="auth-error" style={{marginBottom:'16px'}}>Please request a new password reset.</div>
              <Link to="/login" style={{display:'block',textAlign:'center'}} className="auth-submit" onClick={e => { e.preventDefault(); window.location.href='/SDET-HUB/login'; }}>
                Back to Login →
              </Link>
            </>
          )}

          {status === 'valid' && (
            <>
              <div className="auth-card-header">
                <h1 className="auth-title">Set New Password 🔑</h1>
                <p className="auth-desc">Choose a strong password for <strong>{email}</strong></p>
              </div>
              <form className="auth-form" onSubmit={handleReset} noValidate>
                <div className="auth-field">
                  <label className="auth-label">New Password</label>
                  <input
                    className="auth-input"
                    type="password"
                    placeholder="At least 6 characters"
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    autoFocus
                    autoComplete="new-password"
                  />
                </div>
                <div className="auth-field">
                  <label className="auth-label">Confirm New Password</label>
                  <input
                    className="auth-input"
                    type="password"
                    placeholder="Repeat password"
                    value={form.confirm}
                    onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                    autoComplete="new-password"
                  />
                </div>
                {error && <div className="auth-error">{error}</div>}
                <button className="auth-submit" type="submit" disabled={loading}>
                  {loading ? 'Updating…' : 'Reset Password →'}
                </button>
              </form>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="auth-card-header">
                <h1 className="auth-title">Password Updated! ✅</h1>
                <p className="auth-desc">Your password has been changed successfully.</p>
              </div>
              <div className="auth-success" style={{marginBottom:'20px'}}>
                🎉 You can now log in with your new password.
              </div>
              <button className="auth-submit" onClick={() => navigate('/login')}>
                Go to Login →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
