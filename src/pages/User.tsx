import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../type/type'

export default function User (){
  const user = useSelector((state: AppState)=> state.users.currentProfile)

  return (
    <div>
      <p>{`First name: ${user.name}`}</p>
      <p>{`Address: ${user.address}`}</p>
    </div>
  )
}