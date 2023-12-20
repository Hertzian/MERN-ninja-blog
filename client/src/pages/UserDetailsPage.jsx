import { useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserBlogList from '../components/UserBlogList'
import { UsersContext } from '../context/users/UsersState'

const UserDetailsPage = () => {
  const { getUserById, user } = useContext(UsersContext)
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
        <div>
          <h2>{name} - {email} Details</h2>
          <p>userId: {_id}</p>
          <p>role: {role}</p>
        </div>
        <UserBlogList userId={userId} />
      </>
    )
  }

  return (
    <>
      <button onClick={handleGoBack}>Go back</button>
      {renderUser}
      <br />
    </>
  )
}

export default UserDetailsPage
