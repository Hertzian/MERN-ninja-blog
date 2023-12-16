import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../context/blog/BlogState'
import { AuthContext } from '../context/auth/AuthState'
import { AlertContext } from '../context/alert/AlertState'

const NewBlogPage = ({ history, match }) => {
  const authContext = useContext(AuthContext)
  const blogContext = useContext(BlogContext)
  const alertContext = useContext(AlertContext)

  const { loadUser, user } = authContext
  const { createBlog, blog, updateBlog, getBlog, resetMode } = blogContext
  const { setAlert } = alertContext

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: ''
  })

  let blogId = null
  if (match.params.blogId) {
    blogId = match.params.blogId
  }

  useEffect(() => {
    loadUser()
    if (match.path === '/new-blog') {
      resetMode()
      setFormData((prevState) => {
        return {
          ...prevState,
          author: user.name
        }
      })
    }

    if (blogId) {
      getBlog(blogId)
    }

    return () => resetMode()

    // eslint-disable-next-line
  }, [blogId])

  useEffect(() => {
    if (blog) {
      setFormData((prevState) => {
        return {
          title: blog.title,
          body: blog.body,
          author: user.name
        }
      })
    }
    // eslint-disable-next-line
  }, [blog])

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (blogId) {
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
      <h2>{blogId ? 'Update Blog' : 'New Blog'}</h2>
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
        <button>{blogId ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  )
}

export default NewBlogPage
