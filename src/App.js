import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <MobileMenu />
        <Routes>
          <Route element={<HomePage />} path='/' />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
