import { useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const Alerts = () => {
  const alertContext = useContext(AlertContext)

  console.log(alertContext)

  return (
    alertContext.alerts.length > 0 &&
    alertContext.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        {alert.message}
      </div>
    ))
  )
}

export default Alerts
