import React from 'react'

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('login success!')
  }

  return (
    <>
      <h2>Register page</h2>
      <form className="create" onSubmit={handleSubmit}>
        <label htmlFor="name" className="create label">Name:</label>
        <input name='name' type="text"/>
        <label htmlFor="email" className="create label">Email:</label>
        <input name='email' type="text"/>
        <label htmlFor="password" className="create label">Password:</label>
        <input name='password' type="password"/>
        <label htmlFor="confirm-password" className="create label">Confirm password:</label>
        <input name='confirm-password' type="password"/>
        <button>Register</button>
      </form>
    </>
  )
}

export default RegisterPage
