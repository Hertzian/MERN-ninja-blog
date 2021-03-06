import { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isAdmin: null,
    user: null,
    loading: true,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('/api/users/profile')

      dispatch({
        type: USER_LOADED,
        payload: res.data,
        isAdmin: res.data.role === 'admin'
      })
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err.response.data.message })
    }
  }

  const login = async (formData) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' }
      }

      const res = await axios.post('/api/users/login', formData, config)

      dispatch({ type: LOGIN_SUCCESS, payload: res.data })

      loadUser()
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message })
    }
  }

  const register = async (formData) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' }
      }

      const res = await axios.post('/api/users/register', formData, config)

      dispatch({ type: REGISTER_SUCCESS, payload: res.data })

      loadUser()
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.message })
    }
  }

  const logout = () => dispatch({ type: LOGOUT })

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isAdmin: state.isAdmin,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
