import { IUser } from '@/types/user.types'

export interface IUserState {
	email: string
	login: string

	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IIninitialState {
	user: IUserState | null

	isLoading: boolean
}

export interface IAuth {
	emailLogin: string
	password: string
}

export interface IRegister {
	login: string
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}
