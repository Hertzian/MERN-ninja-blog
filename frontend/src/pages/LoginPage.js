import { useState, useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const LoginPage = () => {
  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

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

    if(email === '' || password === ''){
      setAlert('All fields pls ;)', 'danger')
    }else if(password.length < 8){
      setAlert('To short your pass...', 'danger')
    }else{
      setAlert('You are logged in!', 'success')

    }
    // console.log(user)
    // console.log('login success!')
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
