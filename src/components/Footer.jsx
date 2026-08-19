function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="brand-name">BLOOD AND INK</span>
          <p>Premium custom tattoos in a private, clean environment.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navigate</h4>
          <a href="#home">Home</a>
          <a href="#styles">Styles</a>
          <a href="#gallery">Portfolio</a>
          <a href="#about">About</a>
        </div>
        
        <div className="footer-social">
          <h4>Connect</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#contact">Book an Appointment</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Ashok Tattoo Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
