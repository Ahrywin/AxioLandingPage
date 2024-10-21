import React, { useState, useEffect } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/AXIO.png'

import { FaBars, FaTimes } from 'react-icons/fa';
const HeaderComp = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsMenuOpen(false); // Cierra el menú al seleccionar una opción
    };

    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
   

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/">
            <img src={Logo} alt="" className="logo" />
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <Link 
                to="/" 
                onClick={() => handleLinkClick("/")}
                className={activeLink === "/" ? "active" : ""}
            >
                Inicio
            </Link>
            <Link 
                to="/about" 
                onClick={() => handleLinkClick("/about")}
                className={activeLink === "/about" ? "active" : ""}
            >
                ¿Quiénes somos?
            </Link>
            <Link 
                to="/certifications" 
                onClick={() => handleLinkClick("/certifications")}
                className={activeLink === "/certifications" ? "active" : ""}
            >
                Certificaciones
            </Link>
            <Link 
                to="/digital" 
                onClick={() => handleLinkClick("/digital")}
                className={activeLink === "/digital" ? "active" : ""}
            >
                Ecosistema Digital
            </Link>
            <Link 
                to="/services" 
                onClick={() => handleLinkClick("/services")}
                className={activeLink === "/services" ? "active" : ""}
            >
                Servicios
            </Link>
            <Link 
                to="/contact" 
                onClick={() => handleLinkClick("/contact")}
                className={activeLink === "/contact" ? "active" : ""}
            >
                Contacto
            </Link>
        </nav>
    </header>
);
}

export default HeaderComp
