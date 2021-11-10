import React, { useState } from 'react'
// import { useSelector } from 'react-redux'

import { TextField } from '@mui/material'

export default function Login (){
  const [userName, setUserName] = useState()
  const [pass, setPass] = useState()
  return (
    <div>
      <TextField label="User name" variant="outlined" inputRef={userName}/>
      <TextField label="Password" variant="outlined" inputRef={pass}/>
    </div>
  )
}