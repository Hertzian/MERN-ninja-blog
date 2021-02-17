import { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import UserList from '../components/UserList'
import AuthContext from '../context/auth/authContext'
import UsersContext from '../context/users/usersContext'

const UsersPage = (props) => {
  const authContext = useContext(AuthContext)
  const usersContext = useContext(UsersContext)

  const { isAdmin } = authContext
  const { getAllUsers, users } = usersContext

  useEffect(() => {
    getAllUsers()
  }, [])

  if (!isAdmin) {
    return <Redirect to='/' />
  }

  return <UserList users={users} />
}

export default UsersPage
