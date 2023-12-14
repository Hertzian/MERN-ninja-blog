import { useReducer } from 'react'
import { v4 } from 'uuid'
import alertReducer from './alertReducer'
import alertContext from './alertContext'
import { SET_ALERT, REMOVE_ALERT } from '../types'

const AlertState = ({ children }) => {
  const initialState = []

  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (message, type, timeout = 5000) => {
    const id = v4()

    dispatch({
      type: SET_ALERT,
      payload: { message, type, id }
    })

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id
        }),
      timeout
    )
  }

  return (
    <alertContext.Provider value={{ alerts: state, setAlert }}>
      {children}
    </alertContext.Provider>
  )
}

export default AlertState
