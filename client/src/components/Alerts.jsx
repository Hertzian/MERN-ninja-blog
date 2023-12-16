import { useContext } from 'react'
import { AlertContext } from '../context/alert/AlertState'

function Alerts() {
  const { alerts } = useContext(AlertContext)

  let renderAlerts
  if (alerts && alerts.length > 0) {
    renderAlerts = alerts.map(
      (alert) => <div key={alert.id} className={`alert alert-${alert.type}`}>{alert.message}</div>
    )
  }

  return <>{renderAlerts}</>
}

export default Alerts
