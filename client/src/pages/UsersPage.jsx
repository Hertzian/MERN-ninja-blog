import { useContext } from 'react'
// import { Redirect } from 'react-router-dom'
import UserList from '../components/UserList'
import { AuthContext } from '../context/auth/AuthState'

const UsersPage = () => {
  const { isAdmin, isAuthenticated } = useContext(AuthContext)

  if (isAdmin && isAuthenticated) {
    return (
      <>
        <h2>UsersPage</h2>
        <UserList />
      </>
    )
  }
}

export default UsersPage
