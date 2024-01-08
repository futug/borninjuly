import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

interface INavbar {
  linkArr: 
    {
      name: string
      path: string
    }[]
}
const Navbar = ({linkArr}: INavbar) => {
  return (
    <ul className={styles.navbar}>
      {linkArr.map((link) => (
        <li key={link.name} className={styles.listItem}>
          <Link href={link.path} className={styles.link}>{link.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navbar