import { UserAction, UserState, LOGIN, REGISTER, SUBMIT_STATUS } from "../../type/type";

const initialState: UserState = {
  profile:{
    first_name: '',
    last_name: '',
    address: '',
    age: 0,
    user_name: '',
    password: '',
  },
  submitted: false
}

export function users(state = initialState, action: UserAction){
  switch (action.type) {
  case LOGIN:
    return {
      profile: action.payload.user,
	  submitted: false,
    }
  case REGISTER:
    return {
      profile: action.payload.user,
	  submitted: false,
    }
	
  case SUBMIT_STATUS:
    return {
      ... state, 
	  submitted: false,
    }
	
  default:
    return;
  }
}