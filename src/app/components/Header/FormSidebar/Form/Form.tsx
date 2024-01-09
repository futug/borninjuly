'use client'
import { MenuItem, Select, TextField, Button, Typography } from '@mui/material'
import React from 'react'
import styles from './Form.module.css'
import Chips from '@/app/components/Chips/Chips'

export const Form = () => {
  return (
    <>
      <div className={styles.form}>
        <Typography variant="h4">Contact us</Typography>
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Phone" variant="standard" />
        <Button
          variant="contained"
          sx={{
            width: '100%',
            background: '#000',
            '&:hover': {
              background: '#303531',
            },
          }}
        >
          Отправить
        </Button>
        <div className={styles.chips}>
          <Chips link='#'>Telegram</Chips>
          <Chips link='#'>LinkedIn</Chips>
          <Chips link='#'>Github</Chips>
        </div>
      </div>
    </>
  )
}
