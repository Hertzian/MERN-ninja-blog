import { useContext } from 'react'
import { AlertContext } from '../context/alert/AlertState'

const Alerts = () => {
  const alertContext = useContext(AlertContext)

  // console.log(alertContext.alerts)

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        {alert.message}
      </div>
    ))
  )
}

export default Alerts
