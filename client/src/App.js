import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Modals from './Components/Modals.js';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Modals />
      <Footer />
    </>
  )
}

export default App