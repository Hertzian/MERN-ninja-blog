import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import BlogList from '../components/BlogList'
import UsersContext from '../context/users/usersContext'

const UserDetailsPage = ({ match }) => {
  const usersContext = useContext(UsersContext)
  const { getUserById, userSelected, loading } = usersContext

  const history = useHistory()

  useEffect(() => {
    getUserById(match.params.userId)
    // eslint-disable-next-line
  }, [])

  console.log(match.params.userId)
  console.log('selectedUser: ', userSelected)

  if (!userSelected) {
    return <p>User not found...</p>
  }

  return (
    <>
      <button onClick={() => history.push('/users')}>Go back</button>
      {loading && <p>loading</p>}
      <p>userId: {match.params.userId}</p>
      {userSelected && (
        <div>
          <h2>UserDetailsPage</h2>
          <p>match params: {match.params.userId}</p>
          <p>name: {userSelected.name}</p>
          <p>email: {userSelected.email}</p>
          <p>role: {userSelected.role}</p>
        </div>
      )}

      <h3>Blogs:</h3>
      <BlogList />
    </>
  )
}

export default UserDetailsPage
