import { useState } from 'react'
import './Navbar.css'

const mainLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const moreLinks = [
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Languages', href: '#languages' },
]

function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMenus = () => {
    setMoreOpen(false)
    setMobileOpen(false)
  }

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo */}
        <a href="#" className="navbar-logo" onClick={closeMenus}>
          POOJHA V R
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">

          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
            >
              {link.label}
            </a>
          ))}

          {/* More Dropdown */}
          <div className="navbar-more">
            <button
              className={`navbar-link navbar-more-button ${
                moreOpen ? 'active' : ''
              }`}
              onClick={() => setMoreOpen((prev) => !prev)}
              aria-expanded={moreOpen}
            >
              More
              <span className={`more-arrow ${moreOpen ? 'open' : ''}`}>
                ↓
              </span>
            </button>

            {moreOpen && (
              <div className="more-menu">
                {moreLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="more-menu-link"
                    onClick={closeMenus}
                  >
                    <span>{link.label}</span>
                    <span className="more-menu-arrow">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Contact */}
        <div className="navbar-right">
          <a
            href="#contact"
            className="navbar-contact"
          >
            Contact
            <span>↗</span>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className={`navbar-mobile-button ${
            mobileOpen ? 'open' : ''
          }`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
        </button>

      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">

          {[...mainLinks, ...moreLinks].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-menu-link"
              onClick={closeMenus}
            >
              {link.label}
              <span>↗</span>
            </a>
          ))}

        </div>
      )}
    </header>
  )
}

export default Navbar