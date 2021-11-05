import { LOGIN, LoginAction, User } from "../../type/type";

export function loginUser(user: User): LoginAction{
  return{
    type: LOGIN,
    payload:{
      user: user
    }
  }
}