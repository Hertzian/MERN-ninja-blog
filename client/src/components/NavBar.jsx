import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/auth/AuthState'
import { AlertContext } from '../context/alert/AlertState'

function NavBar() {
  const authContext = useContext(AuthContext)
  const { setAlert } = useContext(AlertContext)
  const { token, isAuthenticated, isAdmin, logout } = authContext

  const handleLogout = () => {
    logout()
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

  return (
    <nav className='navbar'>
      <h1>The Ninja Blog!</h1>
      <div className='links'>

        <Link to='/'>Home</Link>
        {adminLinks}
        {userAuthLinks}

      </div>
    </nav>
  )
}

export default NavBar
