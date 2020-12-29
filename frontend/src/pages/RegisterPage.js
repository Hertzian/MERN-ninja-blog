import React, { useState } from 'react'

const RegisterPage = () => {
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
    console.log(user)
    console.log('login success!')
  }

  return (
    <>
      <h2>Register page</h2>
      <form className='create' onSubmit={handleSubmit}>
        <label htmlFor='name' className='create label'>
          Name:
        </label>
        <input name='name' type='text' value={name} onChange={onChange} />
        <label htmlFor='email' className='create label'>
          Email:
        </label>
        <input name='email' type='email' value={email} onChange={onChange} />
        <label htmlFor='password' className='create label'>
          Password:
        </label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={onChange}
        />
        <label htmlFor='confirm-password' className='create label'>
          Confirm password:
        </label>
        <input
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={onChange}
        />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default RegisterPage
