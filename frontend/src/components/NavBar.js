import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const NavBar = () => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated } = authContext

  return (
    <nav className='navbar'>
      <h1>The Ninja Blog!</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/new-blog'>New Blog</Link>
        {isAuthenticated && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
        <button>Logout</button>
      </div>
    </nav>
  )
}

export default NavBar
