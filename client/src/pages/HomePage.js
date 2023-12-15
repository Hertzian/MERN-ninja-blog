import { useContext, useEffect } from 'react'
import BlogList from '../components/BlogList'
import { BlogContext } from '../context/blog/BlogState'
import { AuthContext } from '../context/auth/AuthState'

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
  }, [token])

  if (blogs !== null && blogs.length === 0 && !loading && blogs === undefined) {
    return <h4>no blogs...</h4>
  }

  let renderBlogs
  if (blogs && !loading) {
    renderBlogs = <BlogList blogs={blogs} />
  } else {
    renderBlogs = <h4>No blogs yet...</h4>
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
      {renderBlogs}
    </div>
  )
}

export default HomePage
