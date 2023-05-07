import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from '@/store/store'

import ReduxToast from './ReduxToast'
import { router } from '@/routers/router'

const RootProvider = () => {
	return (
		<Provider store={store}>
			<ReduxToast />
			<RouterProvider router={router} />
		</Provider>
	)
}

export default RootProvider
