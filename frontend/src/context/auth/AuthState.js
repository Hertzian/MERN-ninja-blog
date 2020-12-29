import { useReducer } from 'react'
import axios from 'axios'
import authContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
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
      const res = await axios.get()
    } catch (error) {}
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
      dispatch({ type: REGISTER_REQUEST })

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await axios.post(`/api/users/register`, formData, config)

      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.message })
      console.log(err.response.data)
    }
  }

  const logout = () => {
    console.log('logout')
  }

  const clearErrors = () => console.log('clear errors')

  return (
    <authContext.Provider
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
        clearErrors,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthState
