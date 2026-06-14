import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_cfpcnzm'
    const TEMPLATE_ID = 'template_918e09a'
    const PUBLIC_KEY = '1EdNEisEmyRRXLC4i'

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus({
            type: 'success',
            message: 'Message sent successfully! I will get back to you soon.'
          })
          setFormData({ name: '', email: '', phone: '', message: '' })
          setLoading(false)
        },
        (error) => {
          setStatus({
            type: 'error',
            message: 'Failed to send message. Please try again.'
          })
          console.error('EmailJS Error:', error)
          setLoading(false)
        }
      )
  }

  return (
    <section id="contact">
      
      <div className="contact-header">
        <h2>Get In <span>Touch</span></h2>
        <p>Have a question or want to work together? Drop me a message!</p>
      </div>

      <div className="contact-container">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}

        </form>
      </div>

    </section>
  )
}

export default Contact