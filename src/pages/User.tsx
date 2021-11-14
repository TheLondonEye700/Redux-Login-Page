import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Box, Button } from '@mui/material'

import { AppState } from '../type/type'
import { logoutUser } from '../redux/actions/user'

const style = {m: 5}

export default function User (){
  const user = useSelector((state: AppState)=> state.users.currentProfile)
  const dispatch = useDispatch()

  const logOut = (e?:any) => {
    // window.localStorage.removeItem()
    dispatch(logoutUser(user))
  }

  return (
    <Box sx={style}>
      <Typography variant="h5">{`Welcome user: ${user.user_name}`} </Typography>
      <Typography>{`First name: ${user.name}`}</Typography>
      <Typography>{`Address: ${user.address}`}</Typography>
	  <Button onClick={logOut}>Logout</Button>
    </Box>
  )
}