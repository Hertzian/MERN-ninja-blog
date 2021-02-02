import { useReducer } from 'react'
import axios from 'axios'
import BlogContext from './blogContext'
import blogReducer from './blogReducer'
import { ERROR_BLOG, GET_ALL_BLOGS } from '../types'

const BlogState = (props) => {
  const initialState = {
    blogs: null,
    error: null,
    loading: true
  }

  const [state, dispatch] = useReducer(blogReducer, initialState)

  const getBlogs = async () => {
    try {

      const res = await axios.get('/api/blogs')

      dispatch({
        type: GET_ALL_BLOGS,
        payload: res.data,
      })
    } catch (err) {
      console.error('err: ', err.response.message)
      dispatch({
        type: ERROR_BLOG,
        payload: err.response.data.message
      })
    }
  }

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        error: state.error,
        loading: state.loading,
        getBlogs,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogState
