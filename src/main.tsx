import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/assets/styles/base.scss'

import RootProvider from './providers/RootProvider'

const root = document.querySelector('#root') as HTMLElement
createRoot(root).render(
	<StrictMode>
		<RootProvider />
	</StrictMode>
)
