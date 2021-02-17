import { GET_ALL_USERS, ERROR_USERS } from '../types'

const usersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: false,
        user: null,
        users: action.payload,
      }

    case ERROR_USERS:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default usersReducer
