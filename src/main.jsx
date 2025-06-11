import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/router';
import { ToastContainer } from "react-toastify"

import {
  RouterProvider,
} from "react-router";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-center" />
    <RouterProvider router={router} />
  </StrictMode>,
)
