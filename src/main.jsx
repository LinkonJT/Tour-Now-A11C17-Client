import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/router';
import { ToastContainer } from "react-toastify"

import {
  RouterProvider,
} from "react-router";
import AuthProvider from './Provider/AuthProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer position="top-center" />
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
