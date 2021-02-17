import React from 'react'
import UserItem from './UserItem'

const UserList = ({ users }) => {
  
  return (
    <>
      <h3>UserList</h3>
      {!users && users > 0 ? (
        users.map((user) => (
          <UserItem user={user} />
        ))
        
      ) : (
        <h3>No users found...</h3>
      )}
    </>
  )
}

export default UserList
