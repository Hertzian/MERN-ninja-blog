import { useContext } from 'react'
import { BlogContext } from '../context/blog/BlogState'
import { AlertContext } from '../context/alert/AlertState'
import BlogItem from './BlogItem'

const BlogList = ({ blogs }) => {
  const blogContext = useContext(BlogContext)
  const alertContext = useContext(AlertContext)

  const { deleteBlog } = blogContext
  const { setAlert } = alertContext

  const deleteHandler = (blogId) => {
    deleteBlog(blogId)
    setAlert('Your blog is gone...', 'success')
  }

  let renderBlogItems
  if (blogs) {
    renderBlogItems = blogs && blogs.map(
      (blog) => <BlogItem blog={blog} onDelete={deleteHandler} key={blog._id} />
    )
  }

  return <>{renderBlogItems}</>
}

export default BlogList
