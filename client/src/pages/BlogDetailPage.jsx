import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BlogContext } from '../context/blog/BlogState'

const BlogDetailPage = ({ match }) => {
  const blogContext = useContext(BlogContext)
  const { loading, blog, getBlog } = blogContext
  const { blogId } = useParams()

  useEffect(() => {
    getBlog(blogId)
  }, [blogId])

  let renderBlog
  if (blog !== null && !loading) {
    renderBlog = (
      <div className='blog-details'>
        <h2>{blog.title}</h2>
        <div>By {blog.author.name}</div>
        <div>{blog.body}</div>
        <Link to='/'>Go back</Link>
      </div>
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
