import React from 'react'
import LOGO from './logo.png'
import Image from 'next/image'
import styles from './Logo.module.css'
const Logo = () => {
  return (
    <Image src={LOGO} alt="logo" height={46} width={46} className={styles.logo}/>
  )
}

export default Logo