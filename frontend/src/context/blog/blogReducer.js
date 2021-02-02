import {
  GET_ALL_BLOGS,
  // CREATE_BLOG,
  GET_ONE_BLOG,
  // UPDATE_BLOG,
  // DELETE_BLOG,
  ERROR_BLOG,
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
        blogs: action.payload
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
