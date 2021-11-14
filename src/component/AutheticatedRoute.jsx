import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const AuthenticatedRoute = ({component: Component, ...rest}) => {
  const currentUser = useSelector((state)=> state.users.currentProfile)
  
  return (
    <Route
	  {...rest}
	  render={(props) => currentUser.name !== '' ? <Component {...props}/>
	  : <Redirect to="/login" />}
    />)	
}

export default AuthenticatedRoute