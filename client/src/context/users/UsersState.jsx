import { useReducer, createContext } from 'react'
import axios from 'axios'
import usersReducer from './usersReducer'
import { GET_ALL_USERS, ERROR_USERS, GET_USER } from '../types'

const apiUrl = import.meta.env.VITE_API_URL

export const UsersContext = createContext()

const UsersState = (props) => {
  const initialState = {
    users: null,
    userSelected: null,
    error: null,
    loading: true
  }

  const [state, dispatch] = useReducer(usersReducer, initialState)

  const getAllUsers = async () => {
    try {
      const res = await axios.get(`${apiUrl}/users`)
      dispatch({ type: GET_ALL_USERS, payload: res.data })
    } catch (err) {
      dispatch({ type: ERROR_USERS, payload: err.response.data.message })
    }
  }

  const getUserById = async (userId) => {
    try {
      const res = await axios.get(`${apiUrl}/users/${userId}`)
      dispatch({ type: GET_USER, payload: res.data })
    } catch (err) {
      dispatch({ type: ERROR_USERS, payload: err.response.data.message })
    }
  }

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        userSelected: state.userSelected,
        error: state.error,
        loading: state.loading,
        getAllUsers,
        getUserById
      }}
    >
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersState
