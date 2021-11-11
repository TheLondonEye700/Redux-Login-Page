import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Button, Link, FormControl } from '@mui/material'
import { useHistory } from "react-router-dom";

import {registerUser} from '../redux/actions/user'

export default function Registration (){
  const userName = useRef(null)
  const pass = useRef(null)
  const name = useRef(null)
  const address = useRef(null)
  let history = useHistory();

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    userName.current= userName.current.value
    pass.current = pass.current.value
    name.current = name.current.value
    address.current = address.current.value
    const user = {name: name.current, address: address.current, user_name: userName.current, password: pass.current}
    console.log(user)
    dispatch(registerUser(user))
    history.push("/")
  }

  return (
    <FormControl>
      <TextField label="Name" variant="outlined" inputRef={name} />
      <TextField label="Address" variant="outlined" inputRef={address} />
      <TextField label="User name" variant="outlined" inputRef={userName} />
      <TextField label="Password" variant="outlined" inputRef={pass} />
      <Button onClick={submitHandler}>Register</Button>
	  <Link href="/">Login</Link>
    </FormControl>
  )
}