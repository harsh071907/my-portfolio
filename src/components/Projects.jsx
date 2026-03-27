import React from 'react'
import './Projects.css'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js featuring product listings, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user authentication, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data, forecasts, and multiple location support.',
      technologies: ['React', 'API Integration', 'Chart.js', 'Axios'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, user authentication, comments system, and SEO optimization.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media metrics with data visualization and detailed performance insights.',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Portfolio Generator',
      description: 'An automated portfolio generator that creates professional portfolios from templates and user data.',
      technologies: ['React', 'Python', 'Node.js', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                <FiGithub /> Code
              </a>
              <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                <FiExternalLink /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
