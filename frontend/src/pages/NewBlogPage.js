import { useContext, useEffect, useState } from 'react'
import BlogContext from '../context/blog/blogContext'
import AuthContext from '../context/auth/authContext'
import AlertContext from '../context/alert/alertContext'

const NewBlogPage = () => {
  const authContext = useContext(AuthContext)
  const blogContext = useContext(BlogContext)
  const alertContext = useContext(AlertContext)

  const { loadUser, user } = authContext
  const { createBlog } = blogContext
  const { setAlert } = alertContext

  const [blog, setBlog] = useState({
    title: '',
    body: '',
    author: '',
  })

  useEffect(() => {
    loadUser()
  }, [])

  const onChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
      author: user.name,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (blog.title === '' || blog.body === '') {
      setAlert('All fields plz :)', 'danger')
    } else {
      createBlog(blog)
      setAlert('You have a new blog!', 'success')
    }
  }

  return (
    <div className='home'>
      <h2>NewBlog</h2>
      <form className='create' onSubmit={handleSubmit}>
        <label htmlFor='title' className='create label'>
          Title:
        </label>
        <input name='title' type='text' onChange={onChange} />
        <label htmlFor='body' className='create label'>
          Body:
        </label>
        <textarea name='body' onChange={onChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewBlogPage
