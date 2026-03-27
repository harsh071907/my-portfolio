import React from 'react'
import './Skills.css'
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi'

function Skills() {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vue.js']
    },
    {
      icon: <FiServer />,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs']
    },
    {
      icon: <FiDatabase />,
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    },
    {
      icon: <FiTool />,
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack']
    }
  ]

  return (
    <section className="skills" id="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
