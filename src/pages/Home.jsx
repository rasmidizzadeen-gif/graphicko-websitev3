import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

/* ── Icons ── */
function ArrowRight({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
}

function PenToolIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/>
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/>
      <path d="m2.3 2.3 7.286 7.286"/>
      <circle cx="11" cy="11" r="2"/>
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/>
      <path d="M10 19v-3.96 3.15"/>
      <path d="M7 19h5"/>
      <rect width="6" height="10" x="16" y="12" rx="2"/>
    </svg>
  )
}

function TrendingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7h6v6"/>
      <path d="m22 7-8.5 8.5-5-5L2 17"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21 21-4.34-4.34"/>
      <circle cx="11" cy="11" r="8"/>
    </svg>
  )
}

/* ── Data ── */
const SERVICES = [
  { icon: PenToolIcon, title: 'Brand Identity', desc: 'Logos, guidelines, and visual systems that leave a lasting mark.' },
  { icon: MonitorIcon, title: 'UI/UX Design', desc: 'Intuitive, beautiful interfaces for web and mobile applications.' },
  { icon: TrendingIcon, title: 'Performance Ads', desc: 'Data-driven campaigns across social and search platforms.' },
  { icon: SearchIcon, title: 'SEO Strategy', desc: 'Organic growth systems to dominate search engine results.' },
]

const TESTIMONIALS = [
  { quote: 'Graphicko completely transformed our visual identity. Our conversion rates doubled within two months of launching the new site.', name: 'Sarah Jenkins', role: 'CMO, NovaBrew', initial: 'S' },
  { quote: 'Their data-driven approach to our ad campaigns lowered our CPA by 45%. True professionals who deliver measurable results.', name: 'Marcus Chen', role: 'Founder, TechVault', initial: 'M' },
  { quote: 'The brand guidelines they created gave us exactly the premium feel we needed to enter the luxury market. Exceptional work.', name: 'Elena Rodriguez', role: 'CEO, PureGlow', initial: 'E' },
]

const BRANDS = ['Vortex', 'Lumina', 'Stratos', 'Nexus', 'Echo']

/* ── Intersection observer hook ── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-in-up')
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

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) {
      setTimeout(() => el.classList.add(styles.heroVisible), 100)
    }
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
        </div>
        <div className="container">
          <div ref={heroRef} className={styles.heroContent}>
            <div className={`${styles.badge} ${styles.heroItem} delay-1 opacity-0`}>
              <span className={`${styles.badgeDot} animate-pulse`} />
              <span>Award-Winning Creative Agency</span>
            </div>
            <h1 className={`${styles.heroTitle} ${styles.heroItem} delay-2 opacity-0`}>
              Design That <span className="gradient-text">Works.</span><br />
              Marketing That <span className="gradient-text">Grows.</span>
            </h1>
            <p className={`${styles.heroSub} ${styles.heroItem} delay-3 opacity-0`}>
              We blend stunning visual aesthetics with data-driven marketing strategies to elevate ambitious brands to category leaders.
            </p>
            <div className={`${styles.heroActions} ${styles.heroItem} delay-4 opacity-0`}>
              <Link to="/contact#contact-form">
                <button className="btn btn-primary btn-lg">
                  Start a Project <ArrowRight />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="btn btn-outline btn-lg">View Our Work</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BRANDS ── */}
      <section className={styles.brands}>
        <div className="container">
          <p className={styles.brandsLabel}>Trusted by innovative companies worldwide</p>
          <div className={styles.brandsList}>
            {BRANDS.map((b) => (
              <h3 key={b} className={styles.brand}>{b}</h3>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Our Expertise</h2>
              <p className={styles.sectionSub}>Comprehensive solutions tailored to scale your brand's digital presence.</p>
            </div>
            <Link to="/services">
              <button className="btn btn-ghost">View All Services <ArrowRight size={16} /></button>
            </Link>
          </div>
          <div className="grid-4">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <ServiceCard key={title} Icon={Icon} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.portfolioHeader}>
            <h2 className={styles.sectionTitle}>Selected Work</h2>
            <p className={styles.sectionSub}>A glimpse into projects that transformed businesses.</p>
          </div>
          <div className="grid-2">
            <PortfolioCard
              tag="Branding"
              title="Vortex FinTech"
              desc="Complete brand identity overhaul"
              color="#0052ff"
            />
            <PortfolioCard
              tag="UI/UX Design"
              title="Lumina Health App"
              desc="Mobile app design and design system"
              color="#0052ff"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/portfolio">
              <button className="btn btn-outline btn-lg">View All Projects</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitleCenter}>Client Success</h2>
          <div className="grid-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 className={styles.ctaTitle}>Ready to dominate your market?</h2>
          <p className={styles.ctaSub}>
            Stop settling for average. Let's build a brand and marketing engine that leaves your competitors behind.
          </p>
          <Link to="/contact#contact-form">
            <button className="btn btn-primary btn-lg" style={{ fontSize: 18, padding: '20px 44px' }}>
              Let's Talk About Your Project <ArrowRight size={22} />
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

/* ── Sub-components ── */
function ServiceCard({ Icon, title, desc }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`card ${styles.serviceCard} opacity-0`}>
      <div className={styles.serviceIcon}><Icon /></div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDesc}>{desc}</p>
    </div>
  )
}

function PortfolioCard({ tag, title, desc, color }) {
  const ref = useReveal()
  
  // Map title to relevant images with fallback
  const imageMap = {
    'Vortex FinTech': 'https://picsum.photos/600/450?random=1',
    'Lumina Health App': 'https://picsum.photos/600/450?random=2',
  }
  
  return (
    <div ref={ref} className={`opacity-0 ${styles.portfolioCard}`}>
      <Link to="/portfolio" className={styles.portfolioLink}>
        <div className={styles.portfolioImgPlaceholder} style={{ background: `linear-gradient(135deg, rgba(0,82,255,0.1) 0%, rgba(0,82,255,0.05) 100%), url('${imageMap[title] || 'https://picsum.photos/600/450?random=3'}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#111118' }}>
          <div className={styles.portfolioPattern} />
          <div className={styles.portfolioOverlay} />
          <div className={styles.portfolioInfo}>
            <div className={styles.portfolioTag}>{tag}</div>
            <h3 className={styles.portfolioTitle}>{title}</h3>
            <p className={styles.portfolioDesc}>{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

function TestimonialCard({ quote, name, role, initial }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`card ${styles.testimonialCard} opacity-0`}>
      <div className={styles.quoteGlyph}>"</div>
      <p className={styles.quoteText}>"{quote}"</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{initial}</div>
        <div>
          <h4 className={styles.authorName}>{name}</h4>
          <p className={styles.authorRole}>{role}</p>
        </div>
      </div>
    </div>
  )
}
