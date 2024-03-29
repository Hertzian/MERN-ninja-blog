import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BlogContext } from '../context/blog/BlogState'
import { AuthContext } from '../context/auth/AuthState'

function BlogDetailPage() {
  const { isAdmin } = useContext(AuthContext)
  const { loading, blog, getBlog } = useContext(BlogContext)
  const { blogId } = useParams()

  useEffect(() => {
    getBlog(blogId)
    // eslint-disable-next-line
  }, [blogId])

  let renderBlog
  if (blog !== null && !loading) {
    renderBlog = (
      <div className='blog-details'>
        <h2>{blog.title}</h2>
        <div>By {blog.author.name}</div>
        <div>{blog.body}</div>
        <Link to='/'>Go back</Link>
        {isAdmin && <Link to={`/users/${blog.author._id}`}>Return to user</Link>}
      </div >
    )
  } else {
    renderBlog = <h4>This is an error...</h4 >
  }

  return (
    <>
      {loading && <h3>loading...</h3>}
      {renderBlog}
    </>
  )
}

export default BlogDetailPage
