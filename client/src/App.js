import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App