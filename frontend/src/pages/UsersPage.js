import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const UsersPage = (props) => {
  const authContext = useContext(AuthContext)
  const { isAdmin } = authContext

  console.log(props.location)

  if (!isAdmin) {
    return <Redirect to='/' />
  }

  return (
    <>
      <h1>test</h1>
    </>
  )
}

export default UsersPage
