import { useContext } from 'react'
// import { Redirect } from 'react-router-dom'
import UserList from '../components/UserList'
import { AuthContext } from '../context/auth/AuthState'

const UsersPage = () => {
  const authContext = useContext(AuthContext)

  const { isAdmin, isAuthenticated } = authContext

  if (isAdmin && isAuthenticated) {
    return (
      <>
        <h2>UsersPage</h2>
        <UserList />
        <h3>Perritos :3</h3>
      </>
    )
  } else {
    // return <Redirect to='/' />
  }
}

export default UsersPage
