import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BlogContext } from '../context/blog/BlogState'
import { AuthContext } from '../context/auth/AuthState'
import { AlertContext } from '../context/alert/AlertState'

const NewBlogPage = () => {
  const { user } = useContext(AuthContext)
  const { createBlog, blogs, updateBlog, resetMode } = useContext(BlogContext)
  const { setAlert } = useContext(AlertContext)
  const { blogId } = useParams()
  const navigate = useNavigate()

  const initialState = {
    title: '',
    body: '',
    author: ''
  }
  const blog = blogs && blogs.find((blog) => blogId === blog._id)

  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        body: blog.body,
        author: user && user.name
      })
    }

    if (!blogId) {
      resetMode()
      setFormData(initialState)
    }
  }, [blogId])

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (blogId) {
      updateBlog(blog._id, formData)
      setAlert('You just updated your blog', 'success')
      navigate('/')
    } else {
      createBlog(formData)
      setAlert('You created a new blog!', 'success')
      navigate('/')
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
          value={formData.title}
        />
        <label htmlFor='body' className='create label'>
          Body:
        </label>
        <textarea name='body' onChange={onChange} value={formData.body} />
        <button>{blogId ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  )
}

export default NewBlogPage
