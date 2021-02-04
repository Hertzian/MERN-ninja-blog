import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'
import BlogContext from '../context/blog/blogContext'
import AlertContext from '../context/alert/alertContext'

const BlogPreview = ({ title, id, author }) => {
  const authContext = useContext(AuthContext)
  const blogContext = useContext(BlogContext)
  const alertContext = useContext(AlertContext)

  const { user, token, loadUser } = authContext
  const { deleteBlog } = blogContext
  const { setAlert } = alertContext

  useEffect(() => {
    if (token) {
      loadUser()
    }
    // eslint-disable-next-line
  }, [token])

  const deleteHandler = () => {
    deleteBlog(id)
    setAlert('Blog gone!', 'success')
  }

  return (
    <div className='blog-preview'>
      <h2>{title}</h2>
      <p>by {author.name}</p>
      <Link to={`/blog/${id}`}>View more</Link>
      {user && user.name === author.name && (
        <>
          <Link to={`/update-blog/${id}`}>Update</Link>
          <button onClick={deleteHandler}>Delete</button>
        </>
      )}
    </div>
  )
}

export default BlogPreview
