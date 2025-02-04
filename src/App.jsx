import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import SavedCountries from './pages/SavedCountries'
import Home from './pages/Home'
import Country from './Components/Country';




const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:name" element={<Country />} />
        <Route path="/SavedCountries" element={<SavedCountries />} />
      </Routes>
    </>
  )
}


export default App