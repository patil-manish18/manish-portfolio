import { useState } from 'react'
import './Navbar.css'

function Navbar({ toggleTheme, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }

  return (
    <nav className={menuOpen ? 'nav-open' : ''}>
      <button className="logo logo-button" type="button" onClick={() => scrollToSection('hero')}>
        Manish
      </button>

      <ul className="nav-links">
        {navItems.map(item => (
          <li key={item.id}>
            <button type="button" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          className="theme-toggle"
          type="button"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
        <a href="https://www.linkedin.com/in/manish-patil-687356248/" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="linkedin-icon"
          />
        </a>
        <button
          className="hamburger"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
