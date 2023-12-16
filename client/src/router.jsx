import { createBrowserRouter } from "react-router-dom"
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import UsersPage from './pages/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BlogDetailPage from './pages/BlogDetailPage'
import NewBlogPage from './pages/NewBlogPage'
import IndexPage from "./pages/IndexPage"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <IndexPage />
      },

      // {
      //   path: '/users',
      //   element: <UsersPage />
      // },
      // {
      //   path: '/users/:userId',
      //   element: <UserDetailsPage />
      // },
      {
        path: '/login',
        element: <LoginPage />
      },
      // {
      //   path: '/register',
      //   element: <RegisterPage />
      // },
      {
        path: '/new-blog',
        element: <NewBlogPage />
      },
      {
        path: '/blog/:blogId',
        element: <BlogDetailPage />
      },
      {
        path: '/update-blog/:blogId',
        element: <NewBlogPage />
      }

    ]
  },
])