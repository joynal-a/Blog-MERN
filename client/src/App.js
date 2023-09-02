import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Modals from './Components/Modals.js';
import SingleBlog from './Components/SingleBlog.js';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog/:id' element={<SingleBlog />}></Route>
      </Routes>
      <Modals />
      <Footer />
    </>
  )
}

export default App