import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'
import AlertContext from '../context/alert/alertContext'

const NavBar = () => {
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)

  const { isAuthenticated, logout } = authContext
  const { setAlert } = alertContext

  const handleLogout = () => {
    logout()
    setAlert('You are logged out!', 'success')
  }

  return (
    <nav className='navbar'>
      <h1>The Ninja Blog!</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/new-blog'>New Blog</Link>
        {!isAuthenticated && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  )
}

export default NavBar
