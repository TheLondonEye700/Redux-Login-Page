import { combineReducers } from 'redux'

import users from './user'

const createRootReducer = () => 
	combineReducers({users})

export default createRootReducer