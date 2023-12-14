import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../context/blog/BlogState'
import { AuthContext } from '../context/auth/AuthState'
import { AlertContext } from '../context/alert/AlertState'

const NewBlogPage = ({ history, match }) => {
  const authContext = useContext(AuthContext)
  const blogContext = useContext(BlogContext)
  const alertContext = useContext(AlertContext)

  const { loadUser, user } = authContext
  const { createBlog, update, error, blog, updateBlog, resetMode } = blogContext
  const { setAlert } = alertContext

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: ''
  })

  useEffect(() => {
    loadUser()

    if (update) {
      setFormData({
        ...formData,
        title: blog.title,
        body: blog.body,
        author: user.name
      })
    } else {
      resetMode()
      setFormData({
        title: '',
        body: '',
        author: ''
      })
      history.push('/new-blog')
    }

    if (match.path === '/new-blog') {
      resetMode()
    }

    if (error) {
      setAlert(error, 'danger')
    }
    // eslint-disable-next-line
  }, [error, history, setAlert, blog, setFormData])

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      // author: user.name,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (update) {
      updateBlog(blog._id, formData)
      history.push('/')
      setAlert('You just updated your blog', 'success')
    } else {
      createBlog(formData)
      history.push('/')
      setAlert('You created a new blog!', 'success')
    }
  }

  return (
    <div className='home'>
      <h2>{update ? 'Update Blog' : 'New Blog'}</h2>
      <form className='create' onSubmit={handleSubmit}>
        <label htmlFor='title' className='create label'>
          Title:
        </label>
        <input
          name='title'
          type='text'
          onChange={onChange}
          value={formData.title || ''}
        />
        <label htmlFor='body' className='create label'>
          Body:
        </label>
        <textarea name='body' onChange={onChange} value={formData.body || ''} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewBlogPage
