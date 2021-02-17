import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
  return (
    <>
      <tr>
        <td>{user.name} </td>
        <td>{user.email} </td>
        <td>
          <Link to={`/user/${user._id}`} user={user}>para alla</Link>
        </td>
      </tr>
    </>
  )
}

export default UserItem
