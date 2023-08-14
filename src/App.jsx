import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import './App.css'
import ShopContextProvider from './context/ShopContext'

function App() {


  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element= {<Shop />}/>
            <Route path='/cart' element= {<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
      
    </div>
  )
}

export default App
