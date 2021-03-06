import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import NewBlogPage from './pages/NewBlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UsersPage from './pages/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage'
import Alerts from './components/Alerts'

import AuthState from './context/auth/AuthState'
import BlogState from './context/blog/BlogState'
import AlertState from './context/alert/AlertState'
import UsersState from './context/users/UsersState'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <BlogState>
        <AlertState>
          <UsersState>
            <div className='App'>
              <Router>
                <NavBar />
                <div className='content'>
                  <Alerts />
                  <Switch>
                    <Route path='/' component={HomePage} exact />
                    <Route path='/users' component={UsersPage} exact />
                    <Route
                      path='/users/:userId'
                      component={UserDetailsPage}
                      exact
                    />
                    <Route path='/login' component={LoginPage} exact />
                    <Route path='/register' component={RegisterPage} exact />
                    <Route path='/new-blog' component={NewBlogPage} />
                    <Route path='/blog/:blogId' component={BlogDetailPage} />
                    <Route
                      path='/update-blog/:blogId'
                      component={NewBlogPage}
                    />
                  </Switch>
                </div>
                <Footer />
              </Router>
            </div>
          </UsersState>
        </AlertState>
      </BlogState>
    </AuthState>
  )
}

export default App
