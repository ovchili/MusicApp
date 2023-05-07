import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'
import { toastr } from 'react-redux-toastr'
import { redirect } from 'react-router-dom'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/toast-error'

import { IAuth, IAuthResponse, IRegister } from './user.interface'

export const login = createAsyncThunk<IAuthResponse, IAuth>(
	'auth/login',
	async ({ emailLogin, password }, thunkApi) => {
		try {
			const response = await AuthService.login(emailLogin, password)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const register = createAsyncThunk<IAuthResponse, IRegister>(
	'auth/register',
	async ({ login, email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(login, email, password)
			toastr.success('Register', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse, IAuth>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()

			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authentication is Finished, plz sign in again'
				)
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
