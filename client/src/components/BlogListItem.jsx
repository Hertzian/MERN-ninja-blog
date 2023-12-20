import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { BlogContext } from "../context/blog/BlogState"
import { AlertContext } from '../context/alert/AlertState'

function BlogListItem({ blog }) {
  const navigate = useNavigate()
  const blogContext = useContext(BlogContext)
  const alertContext = useContext(AlertContext)
  const { deleteBlog } = blogContext
  const { setAlert } = alertContext

  const handleDetail = () => {
    navigate(`/blog/${blog._id}`)
  }
  const handleDelete = () => {
    deleteBlog(blog._id)
    setAlert('Blog deleted', 'danger')
  }

  let renderBlog
  if (blog) {
    const { title, createdAt } = blog
    renderBlog =
      <tr>
        <td>{title}</td>
        <td>{createdAt} </td>
        <td>
          <button onClick={handleDetail}>Detail</button>
          <button onClick={handleDelete}>X</button>
        </td>
      </tr>
  }

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderBlog}
        </tbody>
      </table>
    </>
  )
}

export default BlogListItem