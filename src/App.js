import logo from './logo.svg';
import './App.css';
// import { useTranslation } from 'react-i18next';
import Home from './components/home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Login/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route path="/about" element={<About />} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App; 
