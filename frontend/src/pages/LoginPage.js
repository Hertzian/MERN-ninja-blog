import React from 'react'

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('login success!')
  }

  return (
    <>
      <h2>Login page</h2>
      <form className="create" onSubmit={handleSubmit}>
        <label htmlFor="email" className="create label">Email:</label>
        <input name='email' type="text"/>
        <label htmlFor="password" className="create label">Password:</label>
        <input name='password' type="password"/>
        <button>Login</button>
      </form>
    </>
  )
}

export default LoginPage
