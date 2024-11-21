import React, { useEffect } from 'react';
import HeaderComp from './Components/Header/HeaderComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Certifications from './pages/certifications';
import Digital from './pages/digital';
import Services from './pages/services';
import Contact from './pages/contact';
import Quiz from './pages/quiz';
import Finish from './pages/finish';
import Footer from './Components/Footer/Footer';
import Datos from './Components/formularioContact/Datos';
import Priv from './pages/priv';
import Mnt from './Components/Mantenimiento/mantenimiento';

function App() {
  useEffect(() => {
    // Crear el script de Cookiebot dinámicamente
    const script = document.createElement('script');
    script.id = 'Cookiebot';
    script.src = 'https://consent.cookiebot.com/uc.js';
    script.setAttribute('data-cbid', '86617621-5cf4-4ed4-803e-abb53cd9cffc');
    script.setAttribute('data-blockingmode', 'auto');
    script.type = 'text/javascript';
    document.head.appendChild(script);

    // Limpieza del script cuando el componente se desmonte
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/priv" element={<Priv />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/mantenimiento" element={<Mnt />} />
      </Routes>
      <Datos />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
