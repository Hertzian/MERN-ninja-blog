import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/auth/AuthState'
import { AlertContext } from '../context/alert/AlertState'

function NavBar() {
  const authContext = useContext(AuthContext)
  const { setAlert } = useContext(AlertContext)
  const { loadUser, token, isAuthenticated, isAdmin, logout, user } = authContext
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.token) {
      loadUser()
    }
  }, [isAuthenticated, token, loadUser])

  const handleLogout = () => {
    logout()
    navigate('/')
    setAlert('You are logged out!', 'success')
  }

  let adminLinks, userAuthLinks
  if (isAdmin && isAuthenticated) {
    adminLinks = <Link to='/users'>Users</Link>
  }

  if (!isAuthenticated || !token) {
    userAuthLinks = (
      <>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </>
    )
  } else {
    userAuthLinks = (
      <>
        <Link to='/new-blog'>New Blog</Link>
        <button onClick={handleLogout}>Logout</button>
      </>
    )
  }

  let renderWelcome
  if (user) {
    renderWelcome = <p >Hello {user.name}</p>
  }

  return (
    <>
      <nav className='navbar'>
        <h1>The Ninja Blog!</h1>
        <div className='links'>

          <Link to='/'>Home</Link>
          {adminLinks}
          {userAuthLinks}

        </div>

        {renderWelcome}

      </nav >
    </>
  )
}

export default NavBar
