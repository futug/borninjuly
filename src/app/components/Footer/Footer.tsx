import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Chips from '../Chips/Chips'

const Footer = () => {
  return (
    <div>
      <div className={styles.topRow}>
        <div>
          <h5 className={styles.title}>BORN <span>IN JULY</span></h5>
          <Link className={styles.mail} href="mailto:email@example.com">email@example.com</Link>
        </div>
        <div className={styles.cities}>
        <div className={styles.city}>
          <p className={styles.cityTitle}>Moscow</p>
          <Link className={styles.adress} href="mailto:email@example.com">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
          <Link className={styles.phone} href="tel:+7 999 999 99 99">+7 999 999 99 99</Link>
        </div>
        <div className={styles.city}>
          <p className={styles.cityTitle}>St. Petersburg</p>
          <Link className={styles.adress} href="mailto:email@example.com">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
          <Link className={styles.phone} href="tel:+7 999 999 99 99">+7 999 999 99 99</Link>
        </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <p className={styles.copyright}>© 2022. All rights reserved.</p>
        <div className={styles.links}>
          <Chips link="https://telegram.me/telegram">Telegram</Chips>
          <Chips link="https://twitter.com/telegram">Twitter</Chips>
          <Chips link="https://github.com/telegramdesktop">GitHub</Chips>
          <Chips link="https://telegram.me/telegram">Telegram</Chips>
        </div>
      </div>
    </div>
  )
}

export default Footer