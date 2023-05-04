import { Navigate, Outlet } from 'react-router-dom'

import MainLayout from './Main/MainLayout'

const ProtectedRoutes = () => {
	const login = true
	return login ? (
		<MainLayout>
			<Outlet />
		</MainLayout>
	) : (
		<Navigate to="login" />
	)
}
export default ProtectedRoutes
