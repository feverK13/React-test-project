import Layout from './components/layout/Layout';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import {ProtectedRoute} from './components/auth/ProtectedRoute';
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ShopPage from './pages/ShopPage'
import AuthPage from './pages/AuthPage'
import NotFoundPage from './pages/NotFoundPage'
import './styles/App.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
        )
      },
      {
        path: '/shop',
        element: (
          <ProtectedRoute>
            <ShopPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/about-us',
        element: <AboutUsPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}