import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthState'
import { AlertContext } from '../context/alert/AlertState'

const BlogItem = ({ blog, onDelete }) => {
  const authContext = useContext(AuthContext)
  const { setAlert } = useContext(AlertContext)

  const { user } = authContext
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

export default BlogItem
