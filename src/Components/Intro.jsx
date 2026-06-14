import { useState, useEffect } from 'react'
import './Intro.css'
import resume from '../assets/Resume_Manish_Patil.pdf'
import profileImage from '../assets/Portfolio img.png'

const roles = [
  'Software Developer',
  'Tech Enthusiast',
  'Problem Solver',
  'Freelancer'
]

function Intro() {
  const [displayedText, setDisplayedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayedText(currentRole.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex(prev => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section id="hero">
      <div className="hero-left">
        <h1>Hey There,</h1>
        <h1>I'm <span>Manish M Patil</span></h1>
        <h2>
          {displayedText}
          <span className="cursor">|</span>
        </h2>
        <p>I enjoy working on real-world challenges and continuously upgrading my skills by exploring emerging technologies</p>
        <a className="hero-btn" href={resume} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
      <div className="hero-right">
        <img src={profileImage} alt="Manish" className="profile-img" />
      </div>
    </section>
  )
}

export default Intro
