import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Route/Route'
import AuthPorvider from './components/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthPorvider>
      <RouterProvider router={router} />
    </AuthPorvider>


  </React.StrictMode>,
)
