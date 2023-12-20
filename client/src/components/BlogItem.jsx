import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthState'
import { AlertContext } from '../context/alert/AlertState'

function BlogItem({ blog, onDelete }) {
  const { user } = useContext(AuthContext)
  const { setAlert } = useContext(AlertContext)
  const { title, _id, author } = blog

  const deleteHandler = () => {
    onDelete(_id)
    setAlert('Your blog is gone...', 'success')
  }

  let renderItem, renderButtons
  if ((user && user.name) === (author && author.name)) {
    renderButtons = (
      <>
        <Link to={`/update-blog/${_id}`}>Update</Link>
        <button onClick={deleteHandler}>Delete</button>
      </>
    )
  }

  if (blog && author) {
    renderItem = (
      <div className='blog-preview'>
        <h2>{title}</h2>
        <p>by {author.name}</p>
        <Link to={`/blog/${_id}`}>View more</Link>
        {renderButtons}
      </div>
    )
  }

  return <>{renderItem}</>
}

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default BlogItem
