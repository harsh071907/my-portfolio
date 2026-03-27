import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (e) => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">Prashant Kumar</a>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleNavClick} className="nav-link">Home</a>
          <a href="#about" onClick={handleNavClick} className="nav-link">About</a>
          <a href="#skills" onClick={handleNavClick} className="nav-link">Skills</a>
          <a href="#projects" onClick={handleNavClick} className="nav-link">Projects</a>
          <a href="#experience" onClick={handleNavClick} className="nav-link">Experience</a>
          <a href="#contact" onClick={handleNavClick} className="nav-link">Contact</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
