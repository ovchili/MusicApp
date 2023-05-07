import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('Dragon', data.accessToken)
	Cookies.set('Demon', data.refreshToken)
}

export const removeTokensStorage = () => {
	Cookies.remove('Dragon')
	Cookies.remove('Demon')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
