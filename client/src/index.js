import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import AuthState from './context/auth/AuthState'
import BlogState from './context/blog/BlogState'
import AlertState from './context/alert/AlertState'
import UsersState from './context/users/UsersState'

ReactDOM.render(
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
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
