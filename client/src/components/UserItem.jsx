import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
  let renderUser
  if (user) {
    renderUser = (
      <tr>
        <td>{user.role}</td>
        <td>{user.name} </td>
        <td>{user.email} </td>
        <td>
          <Link className='links' to={`/users/${user._id}`}>View</Link>
        </td>
      </tr>
    )
  }

  return <>{renderUser}</>
}

export default UserItem
