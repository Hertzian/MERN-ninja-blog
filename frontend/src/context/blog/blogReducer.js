import {
  GET_ALL_BLOGS,
  GET_ONE_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
  ERROR_BLOG,
  UPDATE_MODE_BLOG,
  NEW_MODE_BLOG,
  UPDATE_BLOG,
} from '../types'

const blogReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      }

    case GET_ONE_BLOG:
      return {
        ...state,
        loading: false,
        blog: action.payload,
      }

    case UPDATE_MODE_BLOG:
      return {
        ...state,
        loading: false,
        update: true,
        blog: action.payload,
      }

    case NEW_MODE_BLOG:
      return {
        ...state,
        loading: false,
        update: false,
        blog: null,
      }

    case CREATE_BLOG:
      return {
        ...state,
        loading: false,
        blog: action.payload,
      }

    case UPDATE_BLOG:
    case DELETE_BLOG:
      return {
        ...state,
        loading: false,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      }

    case ERROR_BLOG:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default blogReducer
