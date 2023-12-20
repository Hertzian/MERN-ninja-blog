import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../context/alert/AlertState'
import { AuthContext } from '../context/auth/AuthState'

const RegisterPage = () => {
  const { setAlert } = useContext(AlertContext)
  const { register, error, clearErrors, isAuthenticated, token } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated || token) {
      return navigate('/')
    }

    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }
  }, [error, setAlert, clearErrors, isAuthenticated, token, navigate])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { name, email, password, confirmPassword } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })


  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      setAlert('All fields pls ;)', 'danger')
    } else if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register(user)
      return navigate('/')
    }
  }

  return (
    <>
      <h2>Register page</h2>
      <form className='create' onSubmit={handleSubmit}>
        <label htmlFor='name' className='create label'>
          Name:
        </label>
        <input
          name='name'
          type='text'
          value={name}
          onChange={onChange}
        // required
        />
        <label htmlFor='email' className='create label'>
          Email:
        </label>
        <input
          name='email'
          type='email'
          value={email}
          onChange={onChange}
        // required
        />
        <label htmlFor='password' className='create label'>
          Password:
        </label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={onChange}
        // required
        // minLength='6'
        />
        <label htmlFor='confirm-password' className='create label'>
          Confirm password:
        </label>
        <input
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={onChange}
        // required
        // minLength='6'
        />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default RegisterPage
