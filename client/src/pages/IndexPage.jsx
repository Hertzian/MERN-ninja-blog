import { useState, useContext, useEffect } from 'react'
import BlogList from '../components/BlogList'
import { BlogContext } from '../context/blog/BlogState'
import { AuthContext } from '../context/auth/AuthState'

function IndexPage() {
  // const authContext = useContext(AuthContext)
  // const blogContext = useContext(BlogContext)

  // const { loadUser, token } = authContext
  // const { blogs, getBlogs, loading, clearBlogs } = blogContext

  // const [loaded, setLoaded] = useState(false)

  // useEffect(() => {
  //   if (token) {
  //     loadUser()
  //   }

  //   if (!loaded) {
  //     getBlogs()
  //     setLoaded(true)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [token, loadUser, getBlogs, loaded])

  // if (blogs !== null && blogs.length === 0 && !loading && blogs === undefined) {
  //   return <h4>no blogs...</h4>
  // }

  // let renderBlogs
  // if (blogs && !loading) {
  //   renderBlogs = <BlogList blogs={blogs} />
  // } else {
  //   renderBlogs = <h4>No blogs yet...</h4>
  // }

  return (
    <div className='home'>
      <h2>Welcome!</h2>
      <p>ola ke ase</p>
      <p>
        This is a simple page using the MERN stack, utilize in the backend,
        node, express, jwt, mongoDB, bcrypt, mongoose. To handle frontend uses
        react with hooks mainly useState, useEffect, useReducer, useContext. Of
        course it uses concurrently and proxy to join frontend and backend. Can
        look a bit simple, but have plenty of functionalities, for example:
        register, login, create new blog, access to user profile and access for
        admin to manage users, blogs!.
      </p>
      {/* {loading && <h3>loading...</h3>} */}
      {/* {renderBlogs} */}
    </div>
  )
}

export default IndexPage