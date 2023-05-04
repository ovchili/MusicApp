import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import Login from '@/screens/Login/Login'
import NotFound from '@/screens/NotFound/NotFound'
import Register from '@/screens/Register/Register'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)
