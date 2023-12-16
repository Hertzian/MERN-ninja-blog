import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Alerts from '../components/Alerts'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className='App'>
      <NavBar />
      <div className='content'>
        <Alerts />

        <Outlet />

      </div>
      <Footer />
    </div>
  )
}

export default HomePage
