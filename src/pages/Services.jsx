import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealBox({ children, delay = 0, style = {} }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

const SERVICES = [
  {
    icon: '✦',
    title: 'Brand Identity',
    desc: 'We craft complete brand systems — from logo and typography to color palettes and brand guidelines that ensure consistency across every touchpoint.',
    features: ['Logo Design', 'Brand Guidelines', 'Typography System', 'Color Palette', 'Business Collateral', 'Brand Strategy'],
    color: '#0052ff',
  },
  {
    icon: '◈',
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces designed for conversion. We research, wireframe, prototype, and deliver pixel-perfect designs for web and mobile.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design', 'Usability Testing'],
    color: '#7c3aed',
  },
  {
    icon: '◎',
    title: 'Performance Ads',
    desc: 'Data-driven paid advertising campaigns across Meta, Google, TikTok, and LinkedIn that maximise your ROI and drive qualified leads.',
    features: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'A/B Testing', 'Analytics & Reporting'],
    color: '#059669',
  },
  {
    icon: '⬡',
    title: 'SEO Strategy',
    desc: 'Comprehensive organic search strategies that build lasting visibility. Technical audits, content strategy, and link building that ranks.',
    features: ['Technical SEO', 'Keyword Research', 'Content Strategy', 'On-Page SEO', 'Link Building', 'Monthly Reporting'],
    color: '#d97706',
  },
  {
    icon: '◇',
    title: 'Social Media',
    desc: 'End-to-end social media management that builds community, drives engagement, and converts followers into loyal customers.',
    features: ['Content Creation', 'Community Management', 'Influencer Outreach', 'Story Strategy', 'Analytics', 'Brand Voice'],
    color: '#e11d48',
  },
  {
    icon: '▣',
    title: 'Web Development',
    desc: 'Fast, accessible, and scalable websites built on modern stacks. From landing pages to complex web apps — we build it right.',
    features: ['React / Next.js', 'WordPress', 'E-Commerce', 'CMS Integration', 'Performance Optimisation', 'Maintenance'],
    color: '#0891b2',
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We deep-dive into your brand, audience, competitors, and goals to build a strategic foundation.' },
  { step: '02', title: 'Strategy', desc: 'We define clear objectives, KPIs, and a creative direction that aligns with your business goals.' },
  { step: '03', title: 'Creation', desc: 'Our team executes with precision — designing, writing, and building every asset to the highest standard.' },
  { step: '04', title: 'Launch', desc: 'We deploy, monitor, and iterate. Data guides every decision as we optimise for maximum impact.' },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <RevealBox>
            <div className={styles.badge}>Our Services</div>
            <h1 className={styles.title}>
              Everything your brand<br />
              needs to <span className="gradient-text">dominate.</span>
            </h1>
            <p className={styles.sub}>
              From brand identity to performance marketing — we offer a full suite of creative and digital services designed to grow ambitious businesses.
            </p>
          </RevealBox>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {SERVICES.map((s, i) => (
              <RevealBox key={s.title} delay={i * 0.05}>
                <div className={`card ${styles.serviceCard}`}>
                  <div className={styles.serviceIconWrap} style={{ background: `${s.color}18`, color: s.color }}>
                    <span className={styles.serviceIcon}>{s.icon}</span>
                  </div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <ul className={styles.featureList}>
                    {s.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <span className={styles.featureDot} style={{ background: s.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <RevealBox>
            <h2 className={styles.processTitle}>How We Work</h2>
            <p className={styles.processSub}>A proven process that delivers results, every time.</p>
          </RevealBox>
          <div className={styles.processGrid}>
            {PROCESS.map((p, i) => (
              <RevealBox key={p.step} delay={i * 0.1}>
                <div className={styles.processCard}>
                  <div className={styles.processStep}>{p.step}</div>
                  <h3 className={styles.processCardTitle}>{p.title}</h3>
                  <p className={styles.processCardDesc}>{p.desc}</p>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <RevealBox>
            <h2 className={styles.ctaTitle}>Ready to get started?</h2>
            <p className={styles.ctaSub}>Let's talk about how we can grow your brand together.</p>
            <Link to="/contact">
              <button className="btn btn-primary btn-lg">Book a Free Consultation</button>
            </Link>
          </RevealBox>
        </div>
      </section>
    </>
  )
}
