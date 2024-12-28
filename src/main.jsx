import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './AuthProvider/AuthProvider'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Tooltip id="tooltip" />
    </AuthProvider>
  </StrictMode>,
)
