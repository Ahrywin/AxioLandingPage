import React from 'react'
import HeaderComp from './Components/Header/HeaderComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Certifications from './pages/certifications'
import Digital from './pages/digital'
import Services from './pages/services'
import Contact from './pages/contact'
import Quiz from './pages/quiz'
import Finish from './pages/finish'
import Footer from './Components/Footer/Footer'
import Datos from './Components/formularioContact/Datos'
function App() {
  
  return (
    
      <BrowserRouter>
        <HeaderComp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/digital' element={<Digital />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/finish' element={<Finish />} />
        </Routes>
        <Datos/>
        <Footer/>
      </BrowserRouter>
  )
}

export default App

