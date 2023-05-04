import { RouterProvider } from 'react-router-dom'

import { router } from '@/routers/router'

const RootProvider = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default RootProvider
