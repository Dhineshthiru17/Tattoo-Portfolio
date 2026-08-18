import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#styles', label: 'Styles' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          ASHOK TATTOO
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
