import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.layout}>
      {/* Ambient background orbs */}
      <div className={styles.orbTopLeft} />
      <div className={styles.orbBottomRight} />
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
