import React from 'react'

import styles from './backToTop.module.css'

export default function BackToTop() {

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return <div className={styles.container}>
    <button onClick={handleClick} className={styles.button}>&#10514;</button>
  </div>
}