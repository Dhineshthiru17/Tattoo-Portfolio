import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#styles', label: 'Styles' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

function Navbar({ onAboutClick }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="top-banner">
        BLOOD AND INK
      </div>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          {/* Logo */}
          <a href="#home" className="nav-brand" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />
            </svg>
            BLOOD AND INK
          </a>

          {/* Nav Links */}
          <div className={`nav-links ${open ? 'is-open' : ''}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.label === 'About' && onAboutClick) {
                    e.preventDefault()
                    onAboutClick()
                  }
                  setOpen(false)
                }}
                className={link.label === 'Contact' ? 'nav-contact-btn' : ''}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <div className="search-bar">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input type="text" placeholder="Search styles..." />
            </div>
            <div className="user-icon" style={{ marginLeft: '12px' }}>
              <span style={{ fontSize: '0.85rem' }}>Client Login</span>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--text-main)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
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
    </>
  )
}

export default Navbar

