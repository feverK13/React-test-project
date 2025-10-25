// імпортувати необхідні компоненти та сторінки

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
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
        path: 'shop',
        element: (
          <ProtectedRoute>
            <ShopPage />
          </ProtectedRoute>
        )
      },
      {
        path: 'about-us',
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