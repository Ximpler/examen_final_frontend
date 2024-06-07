import { useState } from 'react'
import './App.css'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import EditStudentList from './pages/EditStudentList';
import AllStudentList from './pages/AllStudentList';
import EditStudent from './pages/EditStudent';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/edit" element={<EditStudentList />} />
          <Route path="/all" element={<AllStudentList />} />
          <Route path="/editStudent/:id" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
