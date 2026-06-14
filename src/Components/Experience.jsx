import './Experience.css'
import { useRef, useEffect, useState } from 'react'

const experiences = [
  {
    company: 'C Programming Instructor',
    role: 'CrEast by L&T',
    period: 'July 2023 - Sep 2023',
    description: [
      'Led instructional sessions in C programming, delivering clear and comprehensive lessons to diverse group of learners',
      'Developed tailored coursework and hands-on exercise to enhance students understanding',
    ],
    current: false,
  },
  {
    company: 'Web Development Intern',
    role: 'Don Bosco Institute of Technology',
    period: 'Oct 2023 - Mar 2024',
    description: [
      'Revamped and maintained a dynamic departmental website using HTML, CSS, Bootstrap and JavaScript for optimizing site performance',
      'Worked on creative designs for college website, ensuring its responsiveness and uniformity',
    ],
    current: false,
  },
  {
    company: 'Team Lead Developer',
    role: 'Vidhayak Bharti',
    period: 'April 2024 – Aug 2024',
    description: [
      'Developing a responsive website utilizing HTML, CSS, Bootstrap and JavaScript to create engaging user interface',
      'Collaborated with team members using version control systems such as Git to organize modifications and assign tasks',
      'Utilizing the Agile process to manage project development through iterative sprints with regular reviews and adaptations',
    ],
    current: false,
  },
  {
    company: 'IT Intern',
    role: 'Jacobs Solutions India Pvt. Ltd',
    period: 'June 2024 - July 2024',
    description: [
      'Handling and extracting data from large datasets by categorizing and sorting data according to specific requirements',
      'Creating comprehensive data visualizations using Power BI to facilitate easy understanding and interpretation of data',
      'Leveraging data visualizations to help in decision-making processes for the organization',
    ],
    current: false,
  },
  {
    company: 'Software Developer',
    role: 'Arcon TechSolutions',
    period: 'June 2025 – Present',
    description: [
      'Developed a modular web application using Angular framework, implementing reusable UI components',
      'Implemented a micro-frontend architecture, leveraging libraries like AG-Grid and PrimeNG for modular and scalable frontend development',
      'Implemented API integration to build scalable solutions while handling UI edge cases and dynamic data rendering',
    ],
    current: true,
  },
]

function ExpCard({ exp }) {
  const cardRef = useRef(null)
  const [dims, setDims] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const update = () => {
      if (cardRef.current) {
        setDims({
          w: cardRef.current.offsetWidth,
          h: cardRef.current.offsetHeight
        })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const perimeter = dims.w && dims.h
    ? 2 * (dims.w + dims.h)
    : 1400

  return (
    <div
      ref={cardRef}
      className={`exp-card ${exp.current ? 'exp-card-current' : ''}`}
    >
      <svg className="exp-border-svg" xmlns="http://www.w3.org/2000/svg">
        <rect
          className="exp-border-rect"
          x="1" y="1"
          width={dims.w - 2}
          height={dims.h - 2}
          rx="13" ry="13"
          style={{
            strokeDasharray: perimeter,
            strokeDashoffset: perimeter
          }}
        />
      </svg>

      <div className="exp-accent"></div>
      <div className="exp-body">
        <div className="exp-top">
          <div>
            <h4 className="exp-company">{exp.company}</h4>
            <p className="exp-role">{exp.role}</p>
          </div>
          <div className="exp-period-wrap">
            <span className="exp-period">{exp.period}</span>
            {exp.current && <span className="current-badge">Current</span>}
          </div>
        </div>
        <ul className="exp-desc">
          {exp.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience">

      <div className="exp-header">
        <h2>Work <span>Experience</span></h2>
        <p>My professional journey so far</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0
          return (
            <div key={index} className="timeline-row">

              <div className="timeline-left">
                {isLeft && (
                  <>
                    <ExpCard exp={exp} />
                    <div className="h-line"></div>
                  </>
                )}
              </div>

              <div className="timeline-center">
                <div className="connector-line"></div>
                <div className={`spine-dot ${exp.current ? 'dot-current' : ''}`}></div>
                <div className="connector-line"></div>
              </div>

              <div className="timeline-right">
                {!isLeft && (
                  <>
                    <div className="h-line"></div>
                    <ExpCard exp={exp} />
                  </>
                )}
              </div>

            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Experience