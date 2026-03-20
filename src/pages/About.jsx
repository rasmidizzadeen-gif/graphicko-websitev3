import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

function useReveal() {
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
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealBox({ children, delay = 0, style = {} }) {
  const ref = useReveal()
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`, ...style }}>
      {children}
    </div>
  )
}

const TEAM = [
  { name: 'Alex Mercer', role: 'Founder & Creative Director', initial: 'A', color: '#0052ff' },
  { name: 'Sophia Kim', role: 'Head of Strategy', initial: 'S', color: '#7c3aed' },
  { name: 'Jordan Lee', role: 'Lead Designer', initial: 'J', color: '#059669' },
  { name: 'Priya Patel', role: 'Performance Marketing Lead', initial: 'P', color: '#d97706' },
]

const VALUES = [
  { icon: '◎', title: 'Bold by default', desc: 'We push creative boundaries. Safe is boring. Our work makes people stop and look.' },
  { icon: '◈', title: 'Results-obsessed', desc: 'Beautiful work that doesn\'t perform isn\'t good work. We measure everything.' },
  { icon: '✦', title: 'Radically transparent', desc: 'You get full visibility into our process, strategy, and results — always.' },
  { icon: '⬡', title: 'Long-term thinking', desc: 'We build brands and campaigns designed to compound over time, not just spike once.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <RevealBox>
            <div className={styles.badge}>About Us</div>
            <h1 className={styles.title}>
              We're the team behind<br />
              <span className="gradient-text">brands you admire.</span>
            </h1>
            <p className={styles.sub}>
              Graphicko is a full-service creative agency founded on a simple belief: great design and smart marketing can transform any business into a category leader.
            </p>
          </RevealBox>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <RevealBox>
              <h2 className={styles.storyTitle}>Our Story</h2>
              <p className={styles.storyText}>
                Founded in 2018, Graphicko started as a two-person design studio in a tiny co-working space. Our vision was simple: build the agency we always wished existed — one that combined world-class creative talent with the analytical rigour of the best performance marketers.
              </p>
              <p className={styles.storyText}>
                Today, we're a team of 18 specialists across design, strategy, and growth marketing. We've worked with over 150 brands across 12 industries, from scrappy startups to global enterprises. Our work has generated over $200M in measurable revenue for clients.
              </p>
              <p className={styles.storyText}>
                We don't just execute — we become strategic partners. Every project starts with understanding your business deeply, so every creative decision is grounded in what will actually move the needle.
              </p>
            </RevealBox>
            <RevealBox delay={0.15}>
              <div className={styles.storyVisual}>
                <div className={styles.storyOrb} />
                <div className={styles.storyCard}>
                  <div className={styles.storyCardStat}>2018</div>
                  <div className={styles.storyCardLabel}>Founded</div>
                </div>
                <div className={styles.storyCard2}>
                  <div className={styles.storyCardStat}>$200M+</div>
                  <div className={styles.storyCardLabel}>Revenue Generated</div>
                </div>
                <div className={styles.storyCard3}>
                  <div className={styles.storyCardStat}>18</div>
                  <div className={styles.storyCardLabel}>Team Members</div>
                </div>
              </div>
            </RevealBox>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <RevealBox>
            <h2 className={styles.sectionTitle}>What we stand for</h2>
          </RevealBox>
          <div className="grid-4">
            {VALUES.map((v, i) => (
              <RevealBox key={v.title} delay={i * 0.08}>
                <div className={`card ${styles.valueCard}`}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <RevealBox>
            <h2 className={styles.sectionTitle}>Meet the team</h2>
            <p className={styles.sectionSub}>Talented people who love what they do.</p>
          </RevealBox>
          <div className={styles.teamGrid}>
            {TEAM.map((member, i) => (
              <RevealBox key={member.name} delay={i * 0.1}>
                <div className={`card ${styles.teamCard}`}>
                  <div className={styles.teamAvatar} style={{ background: `${member.color}20`, color: member.color, border: `1px solid ${member.color}30` }}>
                    {member.initial}
                  </div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
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
            <h2 className={styles.ctaTitle}>Want to work with us?</h2>
            <p className={styles.ctaSub}>We're always looking for ambitious brands ready to grow.</p>
            <Link to="/contact#contact-form">
              <button className="btn btn-primary btn-lg">Get in Touch</button>
            </Link>
          </RevealBox>
        </div>
      </section>
    </>
  )
}
