export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const SUBMIT_STATUS = "SUBMIT_STATUS"

export type User = {
	name: string,
	address: string,
	user_name: string,
	password: string,
}

export type UserState = {
	profile: User[],
	currentProfile: User
}

export type LoginAction = {
	type: typeof LOGIN,
	payload: {
		user: User
	}
}

export type RegisterAction = {
	type: typeof REGISTER,
	payload: {
		user: User
	}
}

export type ChangeSubmitStatus = {
	type: typeof SUBMIT_STATUS
}

export type UserAction = LoginAction | RegisterAction | ChangeSubmitStatus

export type AppState = {
	users: UserState
}