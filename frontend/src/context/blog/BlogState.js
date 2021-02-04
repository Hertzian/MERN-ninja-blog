import { useReducer } from 'react'
import axios from 'axios'
import BlogContext from './blogContext'
import blogReducer from './blogReducer'
import {
  ERROR_BLOG,
  GET_ALL_BLOGS,
  GET_ONE_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
} from '../types'

const BlogState = (props) => {
  const initialState = {
    blogs: null,
    blog: null,
    error: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(blogReducer, initialState)

  const getBlogs = async () => {
    try {
      const res = await axios.get('/api/blogs')

      dispatch({ type: GET_ALL_BLOGS, payload: res.data })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }

  const getBlog = async (blogId) => {
    try {
      const res = await axios.get(`/api/blogs/${blogId}`)

      dispatch({ type: GET_ONE_BLOG, payload: res.data })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }

  const createBlog = async (blogData) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await axios.post('/api/blogs', blogData, config)

      dispatch({ type: CREATE_BLOG, payload: res.data })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }

  const deleteBlog = async (blogId) => {
    try {
      await axios.delete(`/api/blogs/${blogId}`)

      dispatch({ type: DELETE_BLOG, payload: blogId })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        blog: state.blog,
        error: state.error,
        loading: state.loading,
        getBlogs,
        getBlog,
        createBlog,
        deleteBlog,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogState
