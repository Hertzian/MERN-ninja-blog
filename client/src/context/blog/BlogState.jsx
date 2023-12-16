import { useReducer, createContext, useCallback } from 'react'
import axios from 'axios'
import blogReducer from './blogReducer'
import {
  ERROR_BLOG,
  GET_ALL_BLOGS,
  GET_ONE_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
  RESET,
  UPDATE_BLOG,
  CLEAR_BLOGS
} from '../types'

const apiUrl = import.meta.env.VITE_API_URL

export const BlogContext = createContext()

function BlogState({ children }) {
  const initialState = {
    blogs: null,
    blog: null,
    error: null,
    loading: true
  }

  const [state, dispatch] = useReducer(blogReducer, initialState)

  const getBlogs = useCallback(async () => {
    try {
      const res = await axios.get(`${apiUrl}/blogs`)
      dispatch({ type: GET_ALL_BLOGS, payload: res.data })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }, [])

  const getBlog = async (blogId) => {
    try {
      const res = await axios.get(`${apiUrl}/blogs/${blogId}`)
      dispatch({ type: GET_ONE_BLOG, payload: res.data })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }

  const createBlog = async (blogData) => {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } }
      const res = await axios.post(`${apiUrl}/blogs`, blogData, config)
      dispatch({ type: CREATE_BLOG, payload: res.data.blog })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }

  const deleteBlog = async (blogId) => {
    try {
      await axios.delete(`${apiUrl}/blogs/${blogId}`)
      dispatch({ type: DELETE_BLOG, payload: blogId })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }

  const updateBlog = async (blogId, blogData) => {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } }
      const res = await axios.put(`${apiUrl}/blogs/${blogId}`, blogData, config)
      dispatch({ type: UPDATE_BLOG, payload: res.data, })
    } catch (err) {
      dispatch({ type: ERROR_BLOG, payload: err.response.data.message })
    }
  }

  const resetMode = () => {
    dispatch({ type: RESET })
    dispatch({ type: CLEAR_BLOGS })
  }

  const clearBlogs = () => dispatch({ type: CLEAR_BLOGS })

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
        updateBlog,
        resetMode,
        clearBlogs
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogState
