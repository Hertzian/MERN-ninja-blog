import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../context/alert/AlertState'
import { AuthContext } from '../context/auth/AuthState'

function LoginPage() {
  const { setAlert } = useContext(AlertContext)
  const { login, error, isAuthenticated, clearErrors, token } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated || token) {
      return navigate('/')
    }

    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }
    // eslint-disable-next-line
  }, [history, error, setAlert, clearErrors, token])

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
      return navigate('/')
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
