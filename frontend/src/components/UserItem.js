import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
  return (
    <>
      <tr>
        <td>{user.role}</td>
        <td>{user.name} </td>
        <td>{user.email} </td>
        <td>
          <Link to={`/users/${user._id}`} >view</Link>
        </td>
      </tr>
    </>
  )
}

export default UserItem
