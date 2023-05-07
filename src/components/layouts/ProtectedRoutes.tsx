import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

import MainLayout from './Main/MainLayout'

const ProtectedRoutes = () => {
	const { user } = useAuth()
	const nav = useNavigate()
	useEffect(() => {
		if (user) {
			nav('home')
		}
	}, [user])
	return user ? (
		<MainLayout>
			<Outlet />
		</MainLayout>
	) : (
		<Navigate to="login" />
	)
}
export default ProtectedRoutes
