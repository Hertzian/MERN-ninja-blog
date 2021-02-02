import { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  // REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
} from '../types'

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
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
      })
    } catch (err) {
      console.error('err: ', err.message)
      dispatch({
        type: USER_LOADED,
        payload: err.response.data.message,
      })
    }
  }

  const login = async (formData) => {
    try {
      dispatch({ type: LOGIN_REQUEST })

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await axios.post(`/api/users/login`, formData, config)

      dispatch({ type: LOGIN_SUCCESS, payload: res.data })

      loadUser()
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message,
      })
    }
  }

  const register = async (formData) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await axios.post(`/api/users/register`, formData, config)

      dispatch({ type: REGISTER_SUCCESS, payload: res.data })

      loadUser()
    } catch (err) {
      console.log(err.response.data.message)
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.message })
    }
  }

  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  // const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        // clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
