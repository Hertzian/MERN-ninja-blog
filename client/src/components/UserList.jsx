import { useContext, useEffect } from 'react'
import UserItem from './UserItem'
import { UsersContext } from '../context/users/UsersState'

function UserList() {
  const { users, getAllUsers, loading } = useContext(UsersContext)

  useEffect(() => {
    getAllUsers()
    // eslint-disable-next-line
  }, [])

  let renderUsers
  if (users) {
    renderUsers = (

      <table className='table'>
        <thead>
          <tr>
            <th>Role</th>
            <th>Name</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => <UserItem key={user._id} user={user} />)}
        </tbody>
        <tfoot>
          <tr>
            <th>Role</th>
            <th>Name</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table >
    )
  }

  if (!users) {
    renderUsers = <p>We dont have any users...</p>
  }

  return (
    <>
      <h3>UserList</h3>
      {loading && <p>loading...</p>}
      {renderUsers}
    </>
  )
}

export default UserList
