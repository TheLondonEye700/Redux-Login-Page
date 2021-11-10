import { UserAction, UserState, LOGIN, REGISTER } from "../../type/type";

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
	
  default:
    return state;
  }
}