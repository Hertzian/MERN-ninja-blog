import { RouterProvider, Outlet } from 'react-router-dom'
import { router } from './router'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Alerts from './components/Alerts'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Alerts />
          <Outlet />

        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
