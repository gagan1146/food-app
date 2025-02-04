import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import {Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/place' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
