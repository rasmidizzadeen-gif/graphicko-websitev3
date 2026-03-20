import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './CaseStudies.module.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.unobserve(el) }
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, delay = 0 }) {
  const ref = useReveal()
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const CASES = [
  {
    client: 'Vortex FinTech',
    service: 'Brand Identity + Web Design',
    headline: 'How a complete brand overhaul increased Vortex\'s close rate by 60%',
    stats: [{ num: '60%', label: 'More Leads Closed' }, { num: '2.4×', label: 'Website Conversions' }, { num: '3 mo', label: 'Timeline' }],
    color: '#0052ff',
    desc: 'Vortex came to us with a disjointed brand that failed to communicate their premium positioning. We rebuilt everything from the ground up — identity, website, and pitch materials.',
  },
  {
    client: 'NovaBrew',
    service: 'Performance Ads + Social Media',
    headline: 'How NovaBrew achieved 4.8× ROAS in their first 90 days with us',
    stats: [{ num: '4.8×', label: 'ROAS' }, { num: '45%', label: 'Lower CPA' }, { num: '90d', label: 'Timeline' }],
    color: '#d97706',
    desc: 'NovaBrew\'s previous agency had burned through budget with little to show. We restructured their entire paid media approach with rigorous testing and creative iteration.',
  },
  {
    client: 'Lumina Health',
    service: 'UI/UX Design + Design System',
    headline: 'Redesigning Lumina\'s app reduced churn by 34% and boosted daily active users',
    stats: [{ num: '34%', label: 'Churn Reduced' }, { num: '+28%', label: 'Daily Active Users' }, { num: '5 mo', label: 'Timeline' }],
    color: '#7c3aed',
    desc: 'Lumina\'s users were churning because the app was confusing and slow. A full UX overhaul — backed by user research — transformed the product into something people love.',
  },
  {
    client: 'TechVault',
    service: 'SEO Strategy + Content',
    headline: 'Taking TechVault from page 5 to #1 for their core keywords in 6 months',
    stats: [{ num: '280%', label: 'Organic Traffic' }, { num: '#1', label: 'Core Keywords' }, { num: '6 mo', label: 'Timeline' }],
    color: '#059669',
    desc: 'TechVault had a great product but zero organic visibility. We built a content-led SEO strategy from scratch — technical fixes, authority content, and strategic link acquisition.',
  },
]

export default function CaseStudies() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <Reveal>
            <div className={styles.badge}>Case Studies</div>
            <h1 className={styles.title}>Real results for<br /><span className="gradient-text">real businesses.</span></h1>
            <p className={styles.sub}>We don't just talk about results — we document them. Here's proof of what's possible when strategy meets craft.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cases}>
            {CASES.map((c, i) => (
              <Reveal key={c.client} delay={i * 0.08}>
                <div className={`card ${styles.caseCard}`}>
                  <div className={styles.caseLeft}>
                    <div className={styles.caseTag} style={{ color: c.color, borderColor: `${c.color}30`, background: `${c.color}10` }}>
                      {c.service}
                    </div>
                    <div className={styles.caseClient}>{c.client}</div>
                    <h2 className={styles.caseHeadline}>{c.headline}</h2>
                    <p className={styles.caseDesc}>{c.desc}</p>
                    <Link to="/contact#contact-form">
                      <button className="btn btn-outline" style={{ marginTop: 24 }}>Start a Similar Project</button>
                    </Link>
                  </div>
                  <div className={styles.caseRight}>
                    {c.stats.map((s) => (
                      <div key={s.label} className={styles.stat} style={{ borderColor: `${c.color}20` }}>
                        <div className={styles.statNum} style={{ color: c.color }}>{s.num}</div>
                        <div className={styles.statLabel}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className={styles.ctaTitle}>Want results like these?</h2>
            <p className={styles.ctaSub}>Let's talk about what we can do for your business.</p>
            <Link to="/contact#contact-form"><button className="btn btn-primary btn-lg">Get a Free Strategy Call</button></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
