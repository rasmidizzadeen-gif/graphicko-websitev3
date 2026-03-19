import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.badge}>Contact Us</div>
          <h1 className={styles.title}>
            Let's build something<br /><span className="gradient-text">great together.</span>
          </h1>
          <p className={styles.sub}>
            Tell us about your project. We'll get back to you within 24 hours with ideas and a plan.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Info */}
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Get in touch</h2>
              <p className={styles.infoText}>
                Whether you're a startup finding your voice or an established brand ready to evolve — we're here to help.
              </p>

              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>✉</div>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <a href="mailto:hello@graphicko.com" className={styles.contactVal}>hello@graphicko.com</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>◎</div>
                  <div>
                    <div className={styles.contactLabel}>Location</div>
                    <div className={styles.contactVal}>London, UK · Remote Worldwide</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>◷</div>
                  <div>
                    <div className={styles.contactLabel}>Response Time</div>
                    <div className={styles.contactVal}>Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className={styles.availability}>
                <span className={styles.availDot} />
                <span>Currently accepting new projects</span>
              </div>
            </div>

            {/* Form */}
            <div className={`card ${styles.formCard}`}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Message sent!</h3>
                  <p className={styles.successSub}>We'll get back to you within 24 hours. Looking forward to working together.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      />
                      {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      />
                      {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        value={form.company}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={styles.input}
                      >
                        <option value="">Select a service</option>
                        <option>Brand Identity</option>
                        <option>UI/UX Design</option>
                        <option>Performance Ads</option>
                        <option>SEO Strategy</option>
                        <option>Social Media</option>
                        <option>Web Development</option>
                        <option>Full Service</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={styles.input}
                    >
                      <option value="">Select budget</option>
                      <option>Under $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Tell us about your project *</label>
                    <textarea
                      name="message"
                      placeholder="Describe your project, goals, and anything else we should know..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    />
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                  </div>

                  <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`}>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
