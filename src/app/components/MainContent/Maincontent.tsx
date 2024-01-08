import React from 'react'
import styles from './Maincontent.module.css'
import Container from '../Container/Container'
import Features from './Features/Features'



export const Maincontent = () => {
  return (
    <div className={styles.maincontent}>
      <Container padding='2rem' margin='0 auto'>
        <Features />
      </Container>
      
    </div>
  )
}
