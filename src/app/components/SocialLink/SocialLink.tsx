import React from 'react'
import styles from './SocialLink.module.css'

interface ILink {
  link: string
  children: React.ReactNode
}
const SocialLink = ({ link, children }: ILink) => {
  return (
    <a href={link} className={styles.link}>{children}</a>
  )
}

export default SocialLink