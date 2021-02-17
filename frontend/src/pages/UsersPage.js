import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import UserList from '../components/UserList'
import AuthContext from '../context/auth/authContext'

const UsersPage = () => {
  const authContext = useContext(AuthContext)

  const { isAdmin } = authContext

  if (!isAdmin) {
    return <Redirect to='/' />
  }

  return (
    <>
      <h2>UsersPage</h2>
      <UserList />
    </>
  )
}

export default UsersPage
