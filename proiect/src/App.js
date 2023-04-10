import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Profile from './components/pages/Profile';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
          <Footer />
    </>
  );
}

export default App;
