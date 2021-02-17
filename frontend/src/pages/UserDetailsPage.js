import { useEffect } from 'react'

const UserDetailsPage = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h2>UserDetailsPage</h2>
      <p>match params: {match.params.userId}</p>
    </div>
  )
}

export default UserDetailsPage
