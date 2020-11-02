import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (<footer className={styles.footer}>
    <div className={styles.container}>
      <Link to='/'>
        <h3 className={styles.the}>The</h3>
        <h3 className={styles.guardian}>Guardian</h3>
      </Link>
      <a className={styles.madeBy} href="https://scottharlan.dev/">Made by Scott Harlan</a>
    </div>
  </footer>)
}