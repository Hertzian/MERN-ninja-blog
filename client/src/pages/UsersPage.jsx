import { useContext } from 'react'
import UserList from '../components/UserList'
import { AuthContext } from '../context/auth/AuthState'

function UsersPage() {
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
