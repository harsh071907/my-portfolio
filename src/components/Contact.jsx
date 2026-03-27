import React, { useState } from 'react'
import './Contact.css'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FiMail className="contact-icon" />
            <div>
              <h3>Email</h3>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
          </div>
          <div className="contact-item">
            <FiPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
          <div className="contact-item">
            <FiMapPin className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>Your City, Country</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          {submitted && <p className="success-message">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
