import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gradient-to-r from-gray-950 to-purple-950'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
