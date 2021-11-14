import { ChangeSubmitStatus, LOGIN, LoginAction, LOGOUT, LogoutAction, REGISTER, RegisterAction, SUBMIT_STATUS, User } from "../../type/type";

export function loginUser(user: User): LoginAction{
  return{
    type: LOGIN,
    payload:{
      user: user
    }
  }
}

export function logoutUser(user: User): LogoutAction{
  return{
    type: LOGOUT,
    payload:{
      user: user
    }
  }
}

export function registerUser(user: User): RegisterAction{
  return {
    type: REGISTER,
    payload:{
      user: user
    }
  }
}

export function changeSumbitStatus(): ChangeSubmitStatus{
  return{
    type: SUBMIT_STATUS,
  }
}