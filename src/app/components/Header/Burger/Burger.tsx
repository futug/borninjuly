import React from 'react'
import styles from './Burger.module.css'

const Burger = () => {
  return (
    <div className={styles.burger}>
      <div className={styles.lineTop}></div>
      <div className={styles.lineBottom}></div>
    </div>
  )
}

export default Burger