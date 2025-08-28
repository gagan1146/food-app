import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import Logout from './pages/Logout/Logout'
import { useContext } from 'react';
import { StoreContext } from './context/StoreContext';

const App = () => {
  const { token } = useContext(StoreContext);
  
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    if (token) {
      setUser("User");
    } else {
      // User is not logged in
      setUser(null);
    }
  }, [token]);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        {user ? <Route path='/cart' element={<Cart/>} /> : ""}
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrders/>} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>
    </div>
    <Footer/>
    </> 
  )
}

export default App