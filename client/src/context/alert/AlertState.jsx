import { useReducer, createContext } from 'react'
import { v4 } from 'uuid'
import alertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

export const AlertContext = createContext()

const AlertState = ({ children }) => {
  const initialState = []

  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (message, type, timeout = 3000) => {
    const id = v4()

    dispatch({
      type: SET_ALERT,
      payload: { message, type, id }
    })

    setTimeout(
      () => dispatch({ type: REMOVE_ALERT, payload: id }),
      timeout
    )
  }

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertState
