import { useState } from 'react'
import './App.css'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';

function App() {
  //para push
  return (
    <>
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
