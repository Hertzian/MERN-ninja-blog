import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import BlogContext from '../context/blog/blogContext'

const BlogDetailPage = ({ match }) => {
  // const BlogDetailPage = (props) => {
  const blogContext = useContext(BlogContext)
  const { loading, blogs, getBlog } = blogContext

  useEffect(() => {
    getBlog(match.params.id)
    // eslint-disable-next-line
  }, [match.params.id])

  return (
    <>
      {loading && <h3>loading...</h3>}

      {blogs !== null && !loading ? (
        <div className='blog-details'>
          <h2>{blogs.title}</h2>
          {/* <div>By {blogs.author.name}</div> */}
          <div>{blogs.body}</div>
          <Link to={'/'}>Go back</Link>
        </div>
      ) : (
        <h4>This is an error...</h4>
      )}
    </>
  )
}

export default BlogDetailPage
