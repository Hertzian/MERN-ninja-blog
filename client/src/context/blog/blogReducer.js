import {
  GET_ALL_BLOGS,
  GET_ONE_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
  ERROR_BLOG,
  RESET,
  UPDATE_BLOG
} from '../types'

const blogReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        loading: false,
        blogs: action.payload
      }

    case GET_ONE_BLOG:
      return {
        ...state,
        loading: false,
        blog: action.payload
      }

    case UPDATE_BLOG:
      return {
        ...state,
        loading: false,
        blog: action.payload,
        blogs: state.blogs.map((blog) => blog._id === action.payload._id ? action.payload : blog)
      }

    case RESET:
      return {
        ...state,
        loading: false,
        blog: null
      }

    case CREATE_BLOG:
      return {
        ...state,
        loading: false,
        blog: action.payload,
        blogs: [...state.blogs, action.payload]
      }

    case DELETE_BLOG:
      return {
        ...state,
        loading: false,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload)
      }

    case ERROR_BLOG:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default blogReducer
