import { useEffect, useContext } from "react"
import PropTypes from 'prop-types'
import { BlogContext } from "../context/blog/BlogState"
import BlogListItem from '../components/BlogListItem'

function BlogList({ userId }) {
  const { blogs, getBlogsByUserId } = useContext(BlogContext)

  useEffect(() => {
    getBlogsByUserId(userId)
    // eslint-disable-next-line
  }, [userId])

  let renderBlogs
  if (blogs) {
    renderBlogs = blogs.map((blog) => <BlogListItem blog={blog} key={blog._id} />)
  }

  if (!blogs) {
    renderBlogs =
      <tr>
        <td>-</td>
        <td>No blogs for this user</td>
        <td>-</td>
      </tr>
  }

  return (
    <>
      <h3>Blogs</h3>
      {renderBlogs}
    </>
  )
}

BlogList.propTypes = {
  userId: PropTypes.string.isRequired
}

export default BlogList
