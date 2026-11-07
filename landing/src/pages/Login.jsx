import { useEffect, useRef, useState } from 'react'
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import Logo from '../components/Logo.jsx'

const DEMO_EMAIL = 'demo@meridianhealth.org'
const DEMO_PASSWORD = 'vitalink-demo'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const redirectTimer = useRef(null)
  const passwordRef = useRef(null)

  useEffect(() => () => window.clearTimeout(redirectTimer.current), [])

  const isBusy = status !== 'idle'

  const fillDemoCredentials = () => {
    setEmail(DEMO_EMAIL)
    setPassword(DEMO_PASSWORD)
    setError('')
    passwordRef.current?.focus()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isBusy) return

    setError('')

    if (!email.trim()) {
      setError('Enter your work email to continue.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid work email address.')
      return
    }

    if (password.length < 6) {
      setError('Your password must be at least 6 characters.')
      return
    }

    setStatus('loading')

    redirectTimer.current = window.setTimeout(() => {
      setStatus('success')
      redirectTimer.current = window.setTimeout(() => {
        window.location.assign('/?signedIn=1')
      }, 550)
    }, 750)
  }

  return (
    <div className="login-page">
      <aside className="login-brand">
        <span className="login-ring login-ring-1" aria-hidden="true" />
        <span className="login-ring login-ring-2" aria-hidden="true" />

        <div className="login-brand-inner">
          <Logo light href="/" />

          <div className="login-brand-copy">
            <span className="pill pill-dark">
              <span className="pulse-dot" aria-hidden="true" />
              Secure hospital access
            </span>
            <h1>Welcome back to the network.</h1>
            <p>
              Sign in to coordinate donor matches, review verified records, and keep every
              transplant decision auditable.
            </p>
            <ul className="login-brand-list">
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                ML-ranked matches in seconds
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                Blockchain-verified consent and records
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                Role-based access with a full audit trail
              </li>
            </ul>

            <div className="login-status">
              <span className="status-dot" aria-hidden="true" />
              <div>
                <strong>All systems operational</strong>
                <span>36 hospital networks online</span>
              </div>
            </div>
          </div>

          <div className="login-brand-foot">
            <span>
              <ShieldCheck size={14} aria-hidden="true" />
              HIPAA-aligned · SOC 2 Type II
            </span>
            <span>© 2026 VitalLink</span>
          </div>
        </div>
      </aside>

      <main className="login-main">
        <div className="login-main-inner">
          <div className="login-topbar">
            <a className="login-back" href="/">
              <ArrowLeft size={15} aria-hidden="true" />
              Back to home
            </a>
            <a className="login-help" href="mailto:support@vitalink.health">
              Need help?
            </a>
          </div>

          <div className="login-panel">
            <span className="eyebrow">Hospital access</span>
            <h2>Welcome back</h2>
            <p className="login-sub">
              Sign in to your VitalLink workspace to continue coordinating care.
            </p>

            <form className="login-form" onSubmit={handleSubmit} noValidate aria-busy={isBusy}>
              <div className="field">
                <label htmlFor="login-email">Work email</label>
                <div className="input-shell">
                  <Mail size={17} aria-hidden="true" />
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="username"
                    placeholder="you@hospital.org"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={isBusy}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'login-error' : undefined}
                  />
                </div>
              </div>

              <div className="field">
                <div className="field-labels">
                  <label htmlFor="login-password">Password</label>
                  <a
                    className="forgot-link"
                    href="mailto:support@vitalink.health?subject=Password%20reset"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="input-shell">
                  <Lock size={17} aria-hidden="true" />
                  <input
                    ref={passwordRef}
                    id="login-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    disabled={isBusy}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'login-error' : undefined}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    disabled={isBusy}
                  >
                    {showPassword ? (
                      <EyeOff size={18} aria-hidden="true" />
                    ) : (
                      <Eye size={18} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div className="remember-row">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                    disabled={isBusy}
                  />
                  <span>Remember me on this device</span>
                </label>
              </div>

              {error && (
                <div className="login-error" id="login-error" role="alert">
                  <AlertCircle size={16} aria-hidden="true" />
                  {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-block login-submit" disabled={isBusy}>
                {status === 'idle' && (
                  <>
                    Sign in
                    <ArrowRight size={17} aria-hidden="true" />
                  </>
                )}
                {status === 'loading' && (
                  <>
                    <Loader2 size={18} className="spin" aria-hidden="true" />
                    Verifying credentials…
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    Signed in — redirecting
                  </>
                )}
              </button>

              <p className="demo-hint">
                Previewing? Any work email and a 6+ character password works.{' '}
                <button
                  type="button"
                  className="text-link"
                  onClick={fillDemoCredentials}
                  disabled={isBusy}
                >
                  Use demo credentials
                </button>
              </p>
            </form>

            <p className="login-signup">
              New to VitalLink? <a href="/#access">Request hospital access</a>
            </p>
            <p className="login-protected">
              <ShieldCheck size={13} aria-hidden="true" />
              Protected by end-to-end encryption and audit-logged access
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
