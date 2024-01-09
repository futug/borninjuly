'use client'
import { MenuItem, Select, TextField, Button } from '@mui/material'
import React from 'react'
import styles from './Form.module.css'

export const Form = () => {
  return (
    <div className={styles.form}>
      <TextField id="standard-basic" label="Имя" variant="standard" />
      <TextField id="standard-basic" label="Компания" variant="standard" />
      <TextField id="standard-basic" label="Номер" variant="standard" />
      <Button variant="contained" sx={{width: '100%', background: '#000'}}>Отправить</Button>
    </div>
  )
}
