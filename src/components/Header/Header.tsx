import React from 'react';
import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Header() {
  return (<header className={styles.header}>
    <Link to='/'>
      <h1 className={styles.the}>The</h1>
      <h1 className={styles.guardian}>Guardian</h1>
    </Link>
  </header>)
}