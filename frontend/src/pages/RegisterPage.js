import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'

const RegisterPage = ({history}) => {
  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

  const authContext = useContext(AuthContext)
  const {register, error, clearErrors, isAuthenticated} = authContext

  useEffect(()=> {
    if(isAuthenticated){
      history.push('/')
    }
    // if(error === 'User already exists'){
    if(error){
      setAlert(error, 'danger')
      clearErrors()
    }
  }, [error, setAlert, clearErrors, history, isAuthenticated])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { name, email, password, confirmPassword } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      setAlert('All fields pls ;)', 'danger')
    } else if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger')
    } else if(password.length < 8){
      setAlert('To short your pass...', 'danger')

    }else {
      register({name, email, password})
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
          // minLength='8'
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
          // minLength='8'

        />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default RegisterPage
