import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'
import './index.css'

const rootElem = document.querySelector('#root') as HTMLElement
const root = createRoot(rootElem)
root.render(
  <>
    <App />
  </>,
)
