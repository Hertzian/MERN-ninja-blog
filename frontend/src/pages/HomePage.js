import { useContext, useEffect } from 'react'
import BlogPreview from '../components/BlogPreview'
import BlogContext from '../context/blog/blogContext'
import AuthContext from '../context/auth/authContext'

const HomePage = () => {
  const authContext = useContext(AuthContext)
  const blogContext = useContext(BlogContext)

  const { loadUser, token } = authContext
  const { blogs, getBlogs, loading } = blogContext

  useEffect(() => {
    if (token) {
      loadUser()
    }
    getBlogs()
    // eslint-disable-next-line
  }, [])

  if (blogs !== null && blogs.length === 0 && !loading) {
    return <h4>no blogs...</h4>
  }

  return (
    <div className='home'>
      <h2>Welcome!</h2>
      <p>
        This is a simple page using the MERN stack, utilize in the backend,
        node, express, jwt, mongoDB, bcrypt, mongoose. To handle frontend uses
        react with hooks mainly useState, useEffect, useReducer, useContext. Of
        course it uses concurrently and proxy to join frontend and backend. Can
        look a bit simple, but have plenty of functionalities, for example:
        register, login, create new blog, access to user profile and access for
        admin to manage users, blogs!.
      </p>

      {loading && <h3>loading...</h3>}
      {blogs !== null && !loading ? (
        blogs.map((blog, index) => (
          <BlogPreview title={blog.title} id={blog._id} key={index} author={blog.author} />
        ))
      ) : (
        <h4>No blogs yet...</h4>
      )}
    </div>
  )
}

export default HomePage
