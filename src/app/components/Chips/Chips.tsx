import React from 'react'
import styles from './Chips.module.css'

interface ILink {
  link: string
  children: React.ReactNode
  className?: string
}
const Chips = ({ link, children, className }: ILink) => {
  return (
    <a href={link} className={`${styles.link} ${className}`}>{children}</a>
  )
}

export default Chips;