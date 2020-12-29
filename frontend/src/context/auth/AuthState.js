import { useReducer } from 'react'
import axios from 'axios'
import authContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import { LOGIN_REQUEST, LOGIN_FAIL } from '../types'

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const loadUser = async() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get()
    } catch (error) {

    }

  }

  const login = async (formData) => {
    try {
      dispatch({ type: LOGIN_REQUEST })

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await axios.post(`/api/users/login`, formData, config)

      loadUser()
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message
      })
    }
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        login,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthState
