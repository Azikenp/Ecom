import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import './App.css'

function App() {


  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element= {<Shop />}/>
          <Route path='/cart' element= {<Cart />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
