import { useState, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'

const LoginPage = ({ history }) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { login, error, isAuthenticated, clearErrors, message } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }

    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }

    if(message) {
      setAlert(message, 'success')
    }
  }, [isAuthenticated, history, error, setAlert, clearErrors])

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      setAlert('All fields pls ;)', 'danger')
    } else if (password.length < 8) {
      setAlert('To short your pass...', 'danger')
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
