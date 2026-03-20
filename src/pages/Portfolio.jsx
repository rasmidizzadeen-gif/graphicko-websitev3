import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Portfolio.module.css'

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
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const CATEGORIES = ['All', 'Branding', 'UI/UX', 'Marketing', 'Web']

const PROJECTS = [
  { id: 1, title: 'Vortex FinTech', category: 'Branding', tag: 'Brand Identity', desc: 'Complete brand identity overhaul for a fintech startup.', color: '#0052ff', pattern: 'dots', details: 'Redesigned entire brand identity, including logo, color palette, typography, and brand guidelines. Increased brand recognition by 45% within the first quarter.' },
  { id: 2, title: 'Lumina Health App', category: 'UI/UX', tag: 'UI/UX Design', desc: 'Mobile app design and comprehensive design system.', color: '#0052ff', pattern: 'grid', details: 'Designed complete user experience and component library for a wellness mobile app. Reduced app churn by 34% through improved UX.' },
  { id: 3, title: 'Stratos E-Commerce', category: 'Web', tag: 'Web Design', desc: 'Luxury e-commerce experience with 3x conversion lift.', color: '#0052ff', pattern: 'lines', details: 'Built premium e-commerce platform with personalized shopping experience. Achieved 3x increase in conversion rates and 2.4x boost in average order value.' },
  { id: 4, title: 'NovaBrew Campaign', category: 'Marketing', tag: 'Performance Ads', desc: 'Social media campaign achieving 4.8x ROAS.', color: '#0052ff', pattern: 'circles', details: 'Executed integrated social media campaign across Meta platforms. Delivered 4.8x ROAS with 45% lower CPA than industry benchmarks.' },
  { id: 5, title: 'Nexus SaaS Platform', category: 'UI/UX', tag: 'Product Design', desc: 'B2B SaaS dashboard redesign reducing churn by 30%.', color: '#0052ff', pattern: 'dots', details: 'Redesigned SaaS dashboard improving user retention and engagement. Reduced monthly churn by 30% and increased feature adoption by 50%.' },
  { id: 6, title: 'Echo Music Brand', category: 'Branding', tag: 'Brand Identity', desc: 'Gen-Z music streaming platform brand and identity.', color: '#0052ff', pattern: 'grid', details: 'Created vibrant brand identity for Gen-Z focused music platform. Launched brand across 15 markets with consistent visual language.' },
  { id: 7, title: 'TechVault SEO', category: 'Marketing', tag: 'SEO Strategy', desc: 'Organic traffic grew 280% in 6 months.', color: '#0052ff', pattern: 'lines', details: 'Implemented comprehensive SEO strategy from technical audits to content marketing. Ranked #1 for 50+ target keywords, growing organic traffic 280%.' },
  { id: 8, title: 'PureGlow Beauty', category: 'Branding', tag: 'Brand Identity', desc: 'Premium beauty brand entering the luxury market.', color: '#0052ff', pattern: 'circles', details: 'Developed luxury brand positioning and visual identity for premium beauty line. Successfully launched in 8 markets with strong market penetration.' },
]

function ProjectCard({ project, index, onSelectProject }) {
  const ref = useReveal()
  
  const patternStyle = {
    dots: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px) 0 0 / 20px 20px',
    grid: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px) 0 0 / 32px 32px,
           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px) 0 0 / 32px 32px`,
    lines: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.04) 20px, rgba(255,255,255,0.04) 21px)`,
    circles: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
  }[project.pattern]

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.07}s, transform 0.6s ease ${index * 0.07}s`,
      }}
    >
      <div className={styles.projectCard}>
        <div
          className={styles.projectImage}
          onClick={() => onSelectProject(project)}
          style={{
            background: `url('https://picsum.photos/800/600?random=${index + 1}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#111118',
            backgroundImage: `linear-gradient(135deg, rgba(0,82,255,0.1) 0%, rgba(0,82,255,0.05) 100%), url('https://picsum.photos/800/600?random=${index + 1}')`,
            cursor: 'pointer',
          }}
        >
          <div className={styles.projectOverlay} />
          <div className={styles.projectMeta}>
            <span className={styles.projectTag} style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}15` }}>
              {project.tag}
            </span>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDesc}>{project.desc}</p>
          </div>
          <div className={styles.projectHover}>
            <button className="btn btn-primary" style={{ fontSize: 13 }} onClick={() => onSelectProject(project)}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.badge}>Our Work</div>
            <h1 className={styles.title}>
              Projects that<br /><span className="gradient-text">speak for themselves.</span>
            </h1>
            <p className={styles.sub}>
              A curated selection of brand identities, digital experiences, and marketing campaigns that transformed businesses.
            </p>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {[['150+', 'Projects'], ['98%', 'Client Satisfaction'], ['12+', 'Industries'], ['40+', 'Awards']].map(([num, label]) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section">
        <div className="container">
          {/* Filter tabs */}
          <div className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onSelectProject={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)}>✕</button>
            <div className={styles.modalImage} style={{ background: `url('https://picsum.photos/1000/600?random=${selectedProject.id}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className={styles.modalBody}>
              <span className={styles.modalTag} style={{ color: selectedProject.color, borderColor: `${selectedProject.color}40`, background: `${selectedProject.color}15` }}>
                {selectedProject.tag}
              </span>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <p className={styles.modalDesc}>{selectedProject.details}</p>
              <Link to="/contact#contact-form">
                <button className="btn btn-primary" onClick={() => setSelectedProject(null)}>Start a Similar Project</button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
          <p className={styles.ctaSub}>Let's create something extraordinary together.</p>
          <Link to="/contact#contact-form">
            <button className="btn btn-primary btn-lg">Start Your Project</button>
          </Link>
        </div>
      </section>
    </>
  )
}
