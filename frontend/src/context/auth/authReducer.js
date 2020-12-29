import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS } from '../types'

export default (state, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: true,
      }
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    case REGISTER_FAIL:
      localStorage.removeItem('token')
      return{
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}
