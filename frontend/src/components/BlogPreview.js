import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const BlogPreview = ({ title, id, author }) => {
  const authContext = useContext(AuthContext)
  const { user } = authContext
  console.log(user)

  return (
    <div className='blog-preview'>
      <h2>{title}</h2>
      <p>by {author.name}</p>
      <Link to={`/post/${id}`}>View more</Link>
      {user.name === author.name && (
        <>
          <Link to={`/update/${id}`} >Update</Link>
          <button>Delete</button>
        </>
      )}
    </div>
  )
}

export default BlogPreview
