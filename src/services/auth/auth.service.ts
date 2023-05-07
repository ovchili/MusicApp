import { getContentType } from 'api/api.helpers'
import { axiosClassic } from 'api/interceptors'
import Cookies from 'js-cookie'

import { getAuthUrl } from '@/configs/api.configs'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(login: string, email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('register'),
			{
				login,
				email,
				password,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async login(loginOrEmail: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('login'),
			{
				loginOrEmail,
				password,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('login/access'),
			{
				refreshToken,
			},
			{ headers: getContentType() }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
}
