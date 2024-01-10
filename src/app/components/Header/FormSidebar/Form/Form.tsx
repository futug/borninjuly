'use client'
import { MenuItem, Select, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './Form.module.css'
import Chips from '@/app/components/Chips/Chips'
import axios from 'axios'

export const Form = () => {

  const [formData, setFormData] = useState({
    email: 'savazkitim@gmail.com',
  })

  function handleChange(fieldName: string, value: string) {
    setFormData({ ...formData, [fieldName]: value });
  }

  async function handleSubmit() {
   const response = await axios.post('https://futug-mailer.vercel.app/api/borninjuly/', formData)
   console.log(formData)
    console.log(response);
  }
  return (
    <>
      <div className={styles.form}>
        <Typography variant="h4">Contact us</Typography>
        <TextField name='name' id="standard-basic" label="Name" variant="standard"  onChange={(event) => handleChange("name", event.target.value)}/>
        <TextField name='clientEmail' id="standard-basic" label="Email" variant="standard" onChange={(event) => handleChange("clientEmail", event.target.value)}/>
        <TextField name='phone' id="standard-basic" label="Phone" variant="standard" onChange={(event) => handleChange("phone", event.target.value)}/>
        <TextField name='message' id="standard-multiline-static" label="Message" multiline rows={4} variant="standard" onChange={(event) => handleChange("message", event.target.value)}/>
        <Button
          onClick={handleSubmit}
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
