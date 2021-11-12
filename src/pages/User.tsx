import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Box } from '@mui/material'

import { AppState } from '../type/type'

const style = {m: 5}

export default function User (){
  const user = useSelector((state: AppState)=> state.users.currentProfile)

  return (
    <Box sx={style}>
      <Typography variant="h5">{`Welcome user ${user.user_name}`} </Typography>
      <Typography>{`First name: ${user.name}`}</Typography>
      <Typography>{`Address: ${user.address}`}</Typography>
    </Box>
  )
}