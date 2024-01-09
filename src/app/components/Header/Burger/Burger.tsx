import React from 'react'
import styles from './Burger.module.css'

interface IBurgerProps {
  setIsFormSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Burger = ({setIsFormSidebarOpen}: IBurgerProps) => {
  return (
    <div onClick={() => setIsFormSidebarOpen(true)} className={styles.burger}>
      <div className={styles.lineTop}></div>
      <div className={styles.lineBottom}></div>
    </div>
  )
}

export default Burger