import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({ user }) {
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

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
