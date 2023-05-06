import { Suspense, lazy } from 'react'
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import Favorite from '@/screens/Favorite/Favorites'
import Home from '@/screens/Home/Home'
import Login from '@/screens/Login/Login'
import NotFound from '@/screens/NotFound/NotFound'
import Register from '@/screens/Register/Register'

import ProtectedRoutes from '@/layouts/ProtectedRoutes'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route path="/" element={<ProtectedRoutes />}>
				<Route index element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="favorites" element={<Favorite />} />
			</Route>
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)
