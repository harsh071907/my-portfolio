import React from 'react'
import './Footer.css'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Prashant Kumar</h3>
          <p>Full Stack Developer | Web Developer | React Enthusiast</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
            <a href="mailto:your.email@example.com">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Prashant Kumar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
