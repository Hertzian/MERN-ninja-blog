import { useState, useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AlertContext } from '../context/alert/AlertState'
import { AuthContext } from '../context/auth/AuthState'

function LoginPage() {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { login, error, isAuthenticated, clearErrors } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      return <Navigate to='/' />
    }

    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }
  }, [isAuthenticated, history, error, setAlert, clearErrors])

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })


  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      setAlert('All fields pls ;)', 'danger')
    } else {
      login({ email, password })
    }
  }

  return (
    <>
      <h2>Login page</h2>
      <form className='create' onSubmit={handleSubmit}>
        <label htmlFor='email' className='create label'>
          Email:
        </label>
        <input name='email' type='text' value={email} onChange={onChange} />
        <label htmlFor='password' className='create label'>
          Password:
        </label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={onChange}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default LoginPage