import React from 'react'
import './Hero.css'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Prashant Kumar</h1>
        <p className="hero-subtitle">Full Stack Developer | Web Developer | React Enthusiast</p>
        <p className="hero-description">
          I create beautiful, responsive, and performant web applications using modern technologies.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FiLinkedin />
          </a>
          <a href="mailto:your.email@example.com" className="social-icon">
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
