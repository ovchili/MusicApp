import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import Login from '@/screens/Login/Login'
import NotFound from '@/screens/NotFound/NotFound'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route path="login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)
