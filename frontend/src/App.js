import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import NewBlogPage from './pages/NewBlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Alerts from './components/Alerts'

import AuthState from './context/auth/AuthState'
import BlogState from './context/blog/BlogState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
      <BlogState>
        <AlertState>
          <div className='App'>
            <Router>
              <NavBar />
              <div className='content'>
                <Alerts />
                <Route path='/' component={HomePage} exact />
                <Route path='/login' component={LoginPage} exact />
                <Route path='/register' component={RegisterPage} exact />
                <Route path='/new-blog' component={NewBlogPage} />
                <Route path='/post/:id' component={BlogDetailPage} />
              </div>
              <Footer />
            </Router>
          </div>
        </AlertState>
      </BlogState>
    </AuthState>
  )
}

export default App
