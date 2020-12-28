import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import NewBlogPage from './pages/NewBlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <div className='content'>
          <Route path='/' component={HomePage} exact />
          <Route path='/login' component={LoginPage} exact />
          <Route path='/register' component={RegisterPage} exact />
          <Route path='/new-blog' component={NewBlogPage} />
          <Route path='/post/:id' component={BlogDetailPage} />
        </div>
      </Router>
    </div>
  )
}

export default App
