import React from 'react'
import styles from './Item.module.css'

interface IItem {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}
const Item = ({icon, title, description} : IItem) => {
  return (
   
       <div className={styles.item}>
      {icon}
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
   
  )
}

export default Item