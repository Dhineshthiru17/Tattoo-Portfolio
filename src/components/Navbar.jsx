import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#styles', label: 'Styles' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#contact', label: 'Contact' },
]
function Navbar() {
  const [open, setOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [aboutModalOpen, setAboutModalOpen] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return (
    <>
      <div className="top-banner">
        BLOOD AND INK
      </div>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />
            </svg>
            BLOOD AND INK
          </Link>

          {/* Nav Links */}
          <div className={`nav-links ${open ? 'is-open' : ''}`}>
            {links.map((link) => {
              // Replace normal Contact link with a modal trigger
              if (link.label === 'Contact') {
                return (
                  <span
                    key={link.href}
                    style={{ cursor: 'pointer', display: 'inline-block' }}
                    className="nav-contact-btn"
                    onClick={() => {
                      setContactModalOpen(true);
                      setOpen(false);
                    }}
                  >
                    Contact
                  </span>
                );
              }

              // Replace normal About link with a modal trigger
              if (link.label === 'About') {
                return (
                  <span
                    key={link.href}
                    style={{ cursor: 'pointer', display: 'inline-block' }}
                    className="nav-contact-btn"
                    onClick={() => {
                      setAboutModalOpen(true);
                      setOpen(false);
                    }}
                  >
                    About
                  </span>
                );
              }

              // For hash links, use normal <a> tags so they scroll to the ID on the home page.
              const isHashLink = link.href.includes('#');

              if (isHashLink) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <div className="search-bar">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input type="text" placeholder="Search styles..." />
            </div>

            {/* Dark Mode Toggle */}
            <button
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle Dark Mode"
              style={{ display: 'flex', alignItems: 'center', marginLeft: '12px', color: 'var(--text-main)', padding: '4px' }}
            >
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
              )}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Contact Modal Popup */}
      {contactModalOpen && (
        <div className="modal-overlay" onClick={() => setContactModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)' }}>
            <button className="modal-close" onClick={() => setContactModalOpen(false)}>&times;</button>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '12px', textAlign: 'center' }}>Get In Touch</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1rem' }}>
              Ready for your next tattoo? We'd love to hear from you and discuss your ideas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Phone */}
              <a href="tel:+919360734516" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '14px', borderRadius: '50%', display: 'flex' }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Call for Bookings</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-main)' }}>+91 93607 34516</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:thirudhinesh1@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '14px', borderRadius: '50%', display: 'flex' }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Email Inquiries</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>thirudhinesh1@gmail.com</div>
                </div>
              </a>

              {/* Hours */}
              <div style={{ marginTop: '16px', textAlign: 'center', padding: '24px', border: '2px dashed var(--border)', borderRadius: '16px' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px', fontSize: '1.1rem' }}>Studio Hours</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>Will update Soon</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Modal Popup */}
      {aboutModalOpen && (
        <div className="modal-overlay" onClick={() => setAboutModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', maxWidth: '600px' }}>
            <button className="modal-close" onClick={() => setAboutModalOpen(false)}>&times;</button>
            
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '8px' }}>About The Artist</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: '0 auto' }}>
                Meet Ashok, your dedicated and certified tattoo artist.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', background: 'var(--bg-secondary)', padding: '32px', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-main)' }}>Crafting Stories Through Ink</h3>
              
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6', fontSize: '1rem' }}>
                Hi, I'm <strong>Ashok</strong>. As a licensed tattoo artist with over 5 years of professional experience, my mission is to translate your ideas into timeless art. I specialize in fine-line and blackwork tattoos. Safety and hygiene are my top priorities; I am certified in bloodborne pathogens, ensuring a 100% sterile and welcoming environment for every client.
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', lineHeight: 1.2 }}>5+</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Years Experience</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', lineHeight: 1.2 }}>100%</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Certified & Sterile</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', lineHeight: 1.2 }}>1:1</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Custom Designs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
