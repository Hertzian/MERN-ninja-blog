import { useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserBlogList from '../components/UserBlogList'
import { UsersContext } from '../context/users/UsersState'

const UserDetailsPage = () => {
  const usersContext = useContext(UsersContext)
  const { getUserById, loading, user } = usersContext
  const navigate = useNavigate()
  const { userId } = useParams()

  useEffect(() => {
    getUserById(userId)
    // eslint-disable-next-line
  }, [])

  const handleGoBack = () => navigate('/users')

  let renderUser
  if (user) {
    const { _id, name, email, role } = user
    renderUser = (
      <>
        <p>userId: {_id}</p>
        <div>
          <h2>UserDetailsPage</h2>
          <p>match params: {userId}</p>
          <p>name: {name}</p>
          <p>email: {email}</p>
          <p>role: {role}</p>
        </div>
        <UserBlogList />
      </>
    )
  }

  return (
    <>
      <button onClick={handleGoBack}>Go back</button>
      {loading && <p>loading</p>}
      {renderUser}
      <br />
    </>
  )
}

export default UserDetailsPage
