import { useState, useContext, useEffect } from 'react'
import BlogList from '../components/BlogList'
import { BlogContext } from '../context/blog/BlogState'
import { AuthContext } from '../context/auth/AuthState'

function IndexPage() {
  const authContext = useContext(AuthContext)
  const blogContext = useContext(BlogContext)

  const { loadUser, user, token, isAuthenticated } = authContext
  const { blogs, getBlogs, loading, clearBlogs } = blogContext

  const [latestBlogs, setLatestBlogs] = useState([])

  console.log('isAdmin?: ', user && user.role)

  useEffect(() => {
    getBlogs()
  }, [getBlogs])

  useEffect(() => {
    setLatestBlogs(blogs)
  }, [blogs])

  if (latestBlogs !== null && !loading && latestBlogs === undefined) {
    return <h4>no blogs...</h4>
  }

  let renderBlogs
  if (latestBlogs && !loading) {
    renderBlogs = <BlogList blogs={latestBlogs} />
  } else {
    renderBlogs = <h4>No blogs yet...</h4>
  }

  return (
    <div className='home'>
      <h2>Welcome!</h2>
      <p>ola ke ase</p>
      <p>
        This is a simple blog page using the MERN stack, for the backend it uses,
        node, express, jwt, mongoDB, bcrypt, mongoose. For the frontend part, uses
        react with hooks, mainly useState, useEffect, useReducer, useContext.
        It uses concurrently previously and proxy to join frontend and backend,
        but I add Docker and docker-compose for the containerization, one container
        for each element, Frontend, Backend and Database.

        The page can look a bit simple at first glance, but have interesting
        functionalities, for example:
        register, login, create new blog, access to user profile, access for
        admin to manage users, and blogs!.
      </p>
      {loading && <h3>loading...</h3>}
      {renderBlogs}
    </div>
  )
}

export default IndexPage