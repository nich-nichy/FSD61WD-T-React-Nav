import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import FSD from './pages/Fsd';
import DS from './pages/Ds';
import CBS from './pages/Cbs';
import Career from './pages/Career';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/course/fsd"
            element={
              <FSD />
            }
          />
          <Route
            path="/course/ds"
            element={
              <DS />
            }
          />
          <Route
            path="/course/cbs"
            element={
              <CBS />
            }
          />
          <Route
            path="/course/career"
            element={
              <Career />
            }
          />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
