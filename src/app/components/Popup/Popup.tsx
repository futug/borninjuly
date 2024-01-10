import { Typography } from '@mui/material'
import React from 'react'

const Popup = () => {
  return (
    <div className='fixed w-full h-full top-0 left-0 flex justify-center items-center'>
      <div className='bg-white p-5 rounded-lg'>
        <Typography variant="h4">Popup</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
      </div>
    </div>
  )
}

export default Popup