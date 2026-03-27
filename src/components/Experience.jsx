import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      description: 'Led development of scalable web applications, mentored junior developers, and implemented best practices.'
    },
    {
      company: 'Digital Innovations Ltd.',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React and Node.js, improved performance by 40%.'
    },
    {
      company: 'Web Creatives',
      position: 'Junior Developer',
      duration: '2019 - 2020',
      description: 'Built responsive web applications, collaborated with design team, and learned modern development practices.'
    },
    {
      company: 'Startup Hub',
      position: 'Web Developer Intern',
      duration: '2018 - 2019',
      description: 'Assisted in building web applications, gained hands-on experience with JavaScript and React.'
    }
  ]

  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{exp.position}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
