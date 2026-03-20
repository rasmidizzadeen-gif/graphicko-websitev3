import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
]

const SERVICE_LINKS = [
  { label: 'Brand Identity', to: '/services' },
  { label: 'Web Design', to: '/services' },
  { label: 'Social Media', to: '/services' },
  { label: 'Google Ads', to: '/services' },
  { label: 'SEO', to: '/services' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Twitter', href: '#', icon: 'twitter' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Dribbble', href: '#', icon: 'dribbble' },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
    </svg>
  )
}

const iconMap = {
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  dribbble: DribbbleIcon,
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" onClick={scrollToTop} className={styles.logo}>
              <div className={styles.logoIcon}><div className={styles.logoInner} /></div>
              <span className={styles.logoText}>Graphicko<span className={styles.logoDot}>.</span></span>
            </Link>
            <p className={styles.tagline}>
              Design that works. Marketing that grows. We are a digital agency pushing the boundaries of what's possible for ambitious brands.
            </p>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((s) => {
                const Icon = iconMap[s.icon]
                return (
                  <a key={s.icon} href={s.href} className={styles.socialIcon} aria-label={s.label}>
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company */}
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Company</h4>
            <ul className={styles.linkList}>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}><Link to={l.to} onClick={scrollToTop} className={styles.footerLink}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Services</h4>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}><Link to={l.to} onClick={scrollToTop} className={styles.footerLink}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h4 className={styles.groupTitle}>Stay in the loop</h4>
            <p className={styles.newsletterText}>Get the latest insights on design and marketing delivered to your inbox.</p>
            {subscribed ? (
              <div className={styles.subscribed}>✓ You're subscribed!</div>
            ) : (
              <form className={styles.form} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Graphicko Agency. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
