import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Proof from './components/Proof.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Platform from './components/Platform.jsx'
import Security from './components/Security.jsx'
import Testimonial from './components/Testimonial.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [showWelcome, setShowWelcome] = useState(
    () => new URLSearchParams(window.location.search).get('signedIn') === '1',
  )

  useEffect(() => {
    if (!showWelcome) return undefined

    window.history.replaceState({}, '', window.location.pathname)
    const timer = window.setTimeout(() => setShowWelcome(false), 4500)
    return () => window.clearTimeout(timer)
  }, [showWelcome])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {showWelcome && (
        <div className="welcome-toast" role="status" aria-live="polite">
          <CheckCircle2 size={18} aria-hidden="true" />
          Signed in successfully — welcome back.
        </div>
      )}
      <Navbar />
      <main id="main">
        <Hero />
        <Proof />
        <HowItWorks />
        <Platform />
        <Security />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
