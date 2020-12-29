import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types'

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, loading: true}

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)

      return {...state, loading: false, userInfo: action.payload}

    case LOGIN_FAIL:
      return {loading: false, error: action.payload}

    case LOGOUT:
      return {}

    default:
      return state
  }
}