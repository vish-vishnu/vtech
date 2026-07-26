import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // CLIENT/DEV: Wire this up to an email service (EmailJS, Formspree, backend API, etc.)
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-sub">
        Have a question about a product or need a repair? Reach out.
      </p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {sent && <p className="success-msg">Message sent — thank you!</p>}
        </form>

        <div className="contact-info">
          {/* CLIENT: Replace with real details */}
          <h3>Store Info</h3>
          <p>📍 Address line here</p>
          <p>📞 Phone number here</p>
          <p>✉️ Email address here</p>
          <p>🕒 Mon–Sat: 10am – 8pm</p>
        </div>
      </div>
    </div>
  )
}

export default Contact