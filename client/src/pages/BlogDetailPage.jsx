import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogContext } from '../context/blog/BlogState'

const BlogDetailPage = ({ match }) => {
  const blogContext = useContext(BlogContext)
  const { loading, blog, getBlog } = blogContext

  useEffect(() => {
    getBlog(match.params.blogId)
    // eslint-disable-next-line
  }, [match.params.blogId])

  return (
    <>
      {loading && <h3>loading...</h3>}

      {blog !== null && !loading ? (
        <div className='blog-details'>
          <h2>{blog.title}</h2>
          <div>By {blog.author.name}</div>
          <div>{blog.body}</div>
          <Link to='/'>Go back</Link>
        </div>
      ) : (
        <h4>This is an error...</h4>
      )}
    </>
  )
}

export default BlogDetailPage
