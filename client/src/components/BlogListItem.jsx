import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { BlogContext } from "../context/blog/BlogState"
import { AlertContext } from '../context/alert/AlertState'

function BlogListItem({ blog }) {
  const navigate = useNavigate()
  const { deleteBlog } = useContext(BlogContext)
  const { setAlert } = useContext(AlertContext)

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

BlogListItem.propTypes = {
  blog: PropTypes.object.isRequired
}

export default BlogListItem