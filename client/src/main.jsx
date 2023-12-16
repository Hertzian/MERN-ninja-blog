import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import AuthState from './context/auth/AuthState'
import BlogState from './context/blog/BlogState'
import AlertState from './context/alert/AlertState'
import UsersState from './context/users/UsersState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthState>
      <BlogState>
        <AlertState>
          <UsersState>

            <App />

          </UsersState>
        </AlertState>
      </BlogState>
    </AuthState>
  </React.StrictMode>,
)
