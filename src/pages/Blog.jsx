import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Blog.module.css'

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

const POSTS = [
  {
    id: 1, featured: true,
    category: 'Branding',
    title: 'Why Your Brand Identity Is Your Most Valuable Business Asset',
    excerpt: 'In an era of infinite choice, the brands that win aren\'t the ones with the best products — they\'re the ones with the clearest identity. Here\'s how to build one that lasts.',
    author: 'Alex Mercer', date: 'Mar 10, 2026', readTime: '8 min read',
    color: '#0052ff',
  },
  {
    id: 2, featured: false,
    category: 'Performance Marketing',
    title: 'The 5 Meta Ads Mistakes Destroying Your ROAS in 2026',
    excerpt: 'Most brands are leaving money on the table with the same predictable mistakes. We\'ve audited 80+ accounts — here\'s what we keep seeing.',
    author: 'Sophia Kim', date: 'Mar 5, 2026', readTime: '6 min read',
    color: '#d97706',
  },
  {
    id: 3, featured: false,
    category: 'SEO',
    title: 'Content-Led SEO: The Strategy That Built 280% Traffic in 6 Months',
    excerpt: 'Forget keyword stuffing. The brands winning at SEO today are doing something fundamentally different. Here\'s the exact playbook we use.',
    author: 'Jordan Lee', date: 'Feb 28, 2026', readTime: '10 min read',
    color: '#059669',
  },
  {
    id: 4, featured: false,
    category: 'Design',
    title: 'The Design Principles Behind Every High-Converting Landing Page',
    excerpt: 'We\'ve designed over 200 landing pages. These are the patterns that consistently drive conversions — and the pitfalls to avoid.',
    author: 'Alex Mercer', date: 'Feb 20, 2026', readTime: '7 min read',
    color: '#7c3aed',
  },
  {
    id: 5, featured: false,
    category: 'Strategy',
    title: 'How to Define Your Brand Voice (And Actually Stick to It)',
    excerpt: 'Brand voice inconsistency is one of the most common — and costly — mistakes growing companies make. Here\'s a framework to fix it.',
    author: 'Priya Patel', date: 'Feb 12, 2026', readTime: '5 min read',
    color: '#e11d48',
  },
  {
    id: 6, featured: false,
    category: 'UI/UX',
    title: '10 UX Patterns That Are Killing Your App\'s Retention',
    excerpt: 'User retention starts at the design level. These are the UX anti-patterns we see most often — and how to fix them.',
    author: 'Jordan Lee', date: 'Feb 5, 2026', readTime: '9 min read',
    color: '#0891b2',
  },
]

export default function Blog() {
  const featured = POSTS.find(p => p.featured)
  const rest = POSTS.filter(p => !p.featured)

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <Reveal>
            <div className={styles.badge}>Blog</div>
            <h1 className={styles.title}>Insights on design,<br /><span className="gradient-text">brand & growth.</span></h1>
            <p className={styles.sub}>Practical ideas and strategies from the Graphicko team — no filler, no fluff.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured */}
          {featured && (
            <Reveal>
              <div className={`card ${styles.featuredCard}`}>
                <div className={styles.featuredVisual} style={{ background: `${featured.color}15` }}>
                  <div className={styles.featuredPattern} />
                  <div className={styles.featuredLabel} style={{ color: featured.color, borderColor: `${featured.color}30`, background: `${featured.color}12` }}>
                    Featured · {featured.category}
                  </div>
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.postAuthor}>{featured.author}</span>
                    <span className={styles.metaDot}>·</span>
                    <span>{featured.date}</span>
                    <span className={styles.metaDot}>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                  <button className="btn btn-primary">Read Article</button>
                </div>
              </div>
            </Reveal>
          )}

          {/* Grid */}
          <div className={styles.grid} style={{ marginTop: 48 }}>
            {rest.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.07}>
                <div className={`card ${styles.postCard}`}>
                  <div className={styles.postVisual} style={{ background: `${post.color}15`, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    <span className={styles.postCategory} style={{ color: post.color, borderColor: `${post.color}30`, background: `${post.color}12` }}>
                      {post.category}
                    </span>
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postMeta}>
                      <span className={styles.postAuthor}>{post.author}</span>
                      <span className={styles.metaDot}>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <button className="btn btn-ghost" style={{ padding: '8px 0', color: 'var(--primary)', fontSize: 13 }}>
                      Read more →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className="container">
          <Reveal>
            <div className={`card ${styles.newsletterCard}`}>
              <div>
                <h2 className={styles.newsletterTitle}>Get insights straight to your inbox</h2>
                <p className={styles.newsletterSub}>Join 3,000+ marketers and founders who read our weekly newsletter.</p>
              </div>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="your@email.com" className={styles.newsletterInput} />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
