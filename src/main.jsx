import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './pages/Contact/Contact.jsx'
import Course from './pages/Course/Course.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />
  },

  {
    path: "/course",
    element: <Course />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />

  </StrictMode>,
)
