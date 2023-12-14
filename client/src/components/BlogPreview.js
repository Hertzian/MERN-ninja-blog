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
  const { deleteBlog, updateMode } = blogContext
  const { setAlert } = alertContext

  useEffect(() => {
    if (token) {
      loadUser()
    }
    // eslint-disable-next-line
  }, [token, ])

  // console.log('message1: ', message)
  const deleteHandler = () => {
    deleteBlog(id)
    setAlert('Your blog is gone...', 'success')
  }

  const updateHandler = () => {
    updateMode(id)
  }

  return (
    <div className='blog-preview'>
      <h2>{title}</h2>
      <p>by {author.name}</p>
      <Link to={`/blog/${id}`}>View more</Link>
      {user && user.name === author.name && (
        <>
          <Link to={`/update-blog/${id}`} onClick={updateHandler}>Update</Link>
          <button onClick={deleteHandler}>Delete</button>
        </>
      )}
    </div>
  )
}

export default BlogPreview
