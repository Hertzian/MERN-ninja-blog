import { useReducer } from 'react'
import axios from 'axios'
import BlogContext from './blogContext'
import blogReducer from './blogReducer'
import {
  ERROR_BLOG,
  GET_ALL_BLOGS,
  GET_ONE_BLOG,
  REQUEST_BLOGS,
  CREATE_BLOG,
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
      dispatch({ type: REQUEST_BLOGS, loading: true })
      const res = await axios.get('/api/blogs')

      dispatch({
        type: GET_ALL_BLOGS,
        payload: res.data,
      })
    } catch (err) {
      console.error('err: ', err.response.message)
      dispatch({
        type: ERROR_BLOG,
        payload: err.response.data.message,
      })
    }
  }

  const getBlog = async (blogId) => {
    try {
      dispatch({ type: REQUEST_BLOGS, loading: true })
      const res = await axios.get(`/api/blogs/${blogId}`)

      // console.log('blog: ', res.data)

      dispatch({
        type: GET_ONE_BLOG,
        payload: res.data,
      })
    } catch (err) {
      console.error('err: ', err)
      dispatch({
        type: ERROR_BLOG,
        payload: err.response,
      })
    }
  }

  const createBlog = async (blogData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/blogs', blogData, config)

      dispatch({ type: CREATE_BLOG, payload: res.data })
    } catch (err) {
      console.error('err: ', err)
      dispatch({
        type: ERROR_BLOG,
        payload: err.response,
      })
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
      }}
    >
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogState
