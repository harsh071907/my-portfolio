import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate full-stack developer with a love for creating innovative web solutions. 
            With 5+ years of experience in web development, I specialize in building scalable applications 
            using modern technologies.
          </p>
          <p>
            My journey in web development started with a curiosity about how things work online. 
            Since then, I've worked with various technologies and frameworks, consistently delivering 
            high-quality projects that exceed client expectations.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Technologies</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
