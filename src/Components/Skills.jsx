import './Skills.css'
import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
]

function Skills() {

  const skillsRef = useRef(null)

  useEffect(() => {

    const section = skillsRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          section.classList.remove('animate-skills')

          setTimeout(() => {
            section.classList.add('animate-skills')
          }, 50)

        }

      },
      {
        threshold: 0.3,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()

  }, [])

  return (
    <section id="skills" ref={skillsRef}>

      <div className="skills-header">
        <h2>Technical <span>Skills</span></h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills-grid">

        {skills.map((skill, i) => (

          <div className="skill-badge" key={i}>

            <div className="skill-circle">
              <img src={skill.icon} alt={skill.name} />
            </div>

            <span className="skill-name">
              {skill.name}
            </span>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills


// import './Skills.css'

// const skills = [
//   { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
//   { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
//   { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//   { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//   { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
//   { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
//   { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
//   { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//   { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
//   { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
//   { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
//   { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
//   { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
//   { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
// ]

// function Skills() {
//   return (
//     <section id="skills">

//       <div className="skills-header">
//         <h2>Technical <span>Skills</span></h2>
//         <p>Technologies and tools I work with</p>
//       </div>

//       <div className="skills-grid">
//         {skills.map((skill, i) => (
//           <div className="skill-badge" key={i}>
//             <div className="skill-circle">
//               <img src={skill.icon} alt={skill.name} />
//             </div>
//             <span className="skill-name">{skill.name}</span>
//           </div>
//         ))}
//       </div>

//     </section>
//   )
// }

// export default Skills


