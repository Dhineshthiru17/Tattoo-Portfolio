import { useState } from 'react'
import heroModel from '../assets/tattoo-artist.jpg'

function Hero() {
  const marqueeItems = Array(6).fill("Memories With Ashok")
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Masterful Ink for<br />Your Unique<br />Story</h1>
            <p>Custom designs and careful linework in a private, sterile studio.</p>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Book a Session</button>
          </div>
          <div className="hero-image">
            <img src={heroModel} alt="Tattoo artist at work" />
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2>Request a Booking</h2>
            <p>Fill out the form below and we'll get back to you shortly.</p>
            <form className="hero-booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" required />
                <input type="text" placeholder="City / Location" required />
              </div>
              <select required defaultValue="" style={{ color: "var(--text-muted)" }} onChange={(e) => e.target.style.color = "var(--text-main)"}>
                <option value="" disabled>Select Tattoo Style</option>
                <option value="fine-line">Fine Line</option>
                <option value="blackwork">Blackwork</option>
                <option value="traditional">Traditional</option>
                <option value="custom">Custom Design</option>
                <option value="other">Other / Not Sure</option>
              </select>
              <textarea
                placeholder="Describe your idea... (e.g. Size, Placement, Concept)"
                rows="4"
                required
              ></textarea>
              <button type="submit" className="btn-primary">Submit Request</button>
            </form>
          </div>
        </div>
      )}

      <div className="marquee-container">
        <div className="marquee-content" aria-hidden="true">
          {marqueeItems.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
          {marqueeItems.map((text, i) => (
            <span key={`dup-${i}`}>{text}</span>
          ))}
        </div>
      </div>
    </>
  )
}
export default Hero


