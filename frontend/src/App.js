import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import NewBlog from './pages/NewBlog'
import BlogDetail from './pages/BlogDetail'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <div className='content'>
          <Route path='/' component={Home} exact />
          <Route path='/new-blog' component={NewBlog} />
          <Route path='/post/:id' component={BlogDetail} />
        </div>
      </Router>
    </div>
  )
}

export default App
