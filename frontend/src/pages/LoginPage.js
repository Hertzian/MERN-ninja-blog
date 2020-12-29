import { useState } from 'react'

const LoginPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    console.log('login success!')
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
