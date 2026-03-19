import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            {/* Logo */}
            <Link to="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <div className={styles.logoInner} />
              </div>
              <span className={styles.logoText}>
                Graphicko<span className={styles.logoDot}>.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className={styles.desktopNav}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${styles.navLink} ${isActive(link.to) ? styles.active : ''}`}
                >
                  {link.label}
                  {isActive(link.to) && <span className={styles.activeLine} />}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className={styles.desktopActions}>
              <Link to="/contact">
                <button className="btn btn-outline">Let's Talk</button>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.mobileLink} ${isActive(link.to) ? styles.mobileLinkActive : ''}`}
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className={styles.mobileCta}>
            <button className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Start a Project
            </button>
          </Link>
        </nav>
      </div>
    </>
  )
}
