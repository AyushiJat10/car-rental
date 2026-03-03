import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, useLocation,Routes } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import Login from './components/Login.jsx'

const App = () => {
  const {showLogin} = useAppContext();
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      <Toaster />
      {showLogin && <Login/>}
      {!isOwnerPath && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
      {!isOwnerPath &&   <Footer/>}
      
    </>
  )
}

export default App
