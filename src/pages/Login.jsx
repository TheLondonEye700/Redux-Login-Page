import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button, Link, FormControl } from '@mui/material'
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

import {loginUser} from '../redux/actions/user'

export default function Login (){
  const userName = useRef(null)
  const pass = useRef(null)
  const user = useSelector(state => state.users)
  const dispatch = useDispatch()

  let history = useHistory();

  const submitHandler = (e) => {
    userName.current= userName.current.value
    pass.current = pass.current.value
    let i
    for (i = 0; i < user.profile.length; i++){
		  if(user.profile[i].user_name === userName.current && user.profile[i].password === pass.current){
          		dispatch(loginUser(user.profile[i]))
          		break
		  }
    }
	 if (i === user.profile.length){
      alert("Wrong user name or password")
	 } else{
      history.push("/user")
	 }
  }

  const responseGoogle = (response) => {
    console.log(response)
  }

  return (
    <FormControl>
      <TextField label="User name" variant="outlined" inputRef={userName}/>
      <TextField label="Password" variant="outlined" inputRef={pass} />
      <Button onClick={submitHandler}>Login</Button>
	  <GoogleLogin
        clientId="428316076141-qpviu7v1v5cm1k03425eqkenm00nln63.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
	  <Link href="/register">Register</Link>
    </FormControl>
  )
}