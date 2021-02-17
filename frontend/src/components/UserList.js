import { useContext, useEffect } from 'react'
import UserItem from './UserItem'
import UsersContext from '../context/users/usersContext'

const UserList = () => {
  const usersContext = useContext(UsersContext)
  const { users, getAllUsers, loading } = usersContext

  useEffect(() => {
    getAllUsers()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h3>UserList</h3>
      {loading && <p>loading...</p>}
      <table className='table'>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, idx) => <UserItem key={idx} user={user} />)}
        </tbody>
      </table>
    </>
  )
}

export default UserList
