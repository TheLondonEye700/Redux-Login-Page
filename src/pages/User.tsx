import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../type/type'

export default function User (){
  const user = useSelector((state: AppState)=> state.users.profile)

  return (
    <div>
      <p>{`First name: ${user.first_name}`}</p>
      <p>{`Last name: ${user.last_name}`}</p>
      <p>{`Address: ${user.address}`}</p>
      <p>{`Age: ${user.age}`}</p>
    </div>
  )
}