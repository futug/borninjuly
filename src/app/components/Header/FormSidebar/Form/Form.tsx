'use client'
import { TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './Form.module.css'
import Chips from '@/app/components/Chips/Chips'
import axios from 'axios'

export const Form = () => {

  const [formData, setFormData] = useState({
    email: 'info@born-in-july.ru',
  })
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(fieldName: string, value: string) {
    setFormData({ ...formData, [fieldName]: value });
  }

  async function handleSubmit() {
    try {
      setLoading(true)
      const response = await axios.post('https://futug-mailer.vercel.app/api/borninjuly/', formData);
      console.log(response);
      setLoading(false)
      setOpen(true);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setLoading(false)
      setOpen(true);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={styles.form}>
        {open && success && <p>Сообщение успешно отправлено!</p>}
        {open && !success && <p>Сообщение не отправлено!</p>}
        <Typography variant="h4">Contact us</Typography>
        <TextField name='name' id="standard-basic" label="Name" variant="standard" placeholder='Your name'  onChange={(event) => handleChange("name", event.target.value)}/>
        <TextField name='clientEmail' id="standard-basic" label="Email" placeholder='example@example.ru' variant="standard" onChange={(event) => handleChange("clientEmail", event.target.value)}/>
        <TextField name='phone' id="standard-basic" label="Phone" placeholder='+7 999 999 99 99' variant="standard" onChange={(event) => handleChange("phone", event.target.value)}/>
        <TextField name='message' id="standard-multiline-static" placeholder='Short description' label="Message" multiline rows={4} variant="standard" onChange={(event) => handleChange("message", event.target.value)}/>
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
