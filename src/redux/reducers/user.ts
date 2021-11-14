import { UserAction, UserState, LOGIN, REGISTER, LOGOUT } from "../../type/type";

const initialState: UserState = {
  profile: [],
  currentProfile: {
    name: '',
    address: '',
    user_name: '',
    password: '',
  }
}

export default function users(state = initialState, action: UserAction){
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      currentProfile: action.payload.user
    
    }

  case REGISTER:
    return {
      ...state,
      profile: [...state.profile, action.payload.user]
    }
  
  case LOGOUT:
    const new_current = {
      name: '',
      address: '',
      user_name: '',
      password: '',
    }
	  return {
      ...state,
		  currentProfile: new_current
	  }
	
  default:
    return state;
  }
}