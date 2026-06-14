// import { useRef, useEffect, useState } from 'react'
// import './Projects.css'

// const projects = [
//   {
//     name: 'AI Driven Hyperlocal Dynamic Machine Learning Model To Predict Crop Yield',
//     description: 'Built an end-to-end crop yield prediction system by integrating Google Earth Engine (GEE) with Machine Learning (ML) and Deep Learning (DL) techniques',
//     tags: ['ML', 'DL', 'Google Earth Engine', 'streamlit'],
//     github: 'https://github.com/patil-manish18/Crop-Yield-Prediction',
//     live: 'https://predicting-cropyield.streamlit.app/',
//     image: '/src/assets/p1.jpg'
//   },
//   {
//     name: 'Fake Product Detection Using-Blockchain Technology',
//     description: 'Developed a blockchain-based solution to detect and prevent the circulation of counterfeit products in the supply chain.',
//     tags: ['Blockchain', 'Smart Contract', 'React'],
//     github: 'https://github.com/patil-manish18/Fake-Product-Detection-Using-Blockchain-Technology',
//     live: null,
//     image: '/src/assets/p2.jpg'
//   },
//   {
//     name: 'Vidhayak Bharti - Preservation of child rights and child protection in society',
//     description: 'Designed and developed a responsive, user-friendly website for Vidhayak Bharti, an NGO working for child rights and protection.',
//     tags: ['Python', 'Flask', 'SQL'],
//     github: 'https://github.com/patil-manish18/VidhayakBharti',
//     live: 'https://vidhayakbharti.org/',
//     image: '/src/assets/p3.png'
//   },
//   // {
//   //   name: 'Resume Parser',
//   //   description: 'Short 2-3 line description about what this project does and what problem it solves.',
//   //   tags: ['Python', 'Flask', 'SQL'],
//   //   github: 'https://github.com',
//   //   live: 'https://live-demo.com',
//   //   image: null
//   // },
//   // {
//   //   name: 'Book Recommendation',
//   //   description: 'Short 2-3 line description about what this project does and what problem it solves.',
//   //   tags: ['React', 'Bootstrap', 'Firebase'],
//   //   github: 'https://github.com',
//   //   live: null,
//   //   image: null
//   // },
//   // {
//   //   name: '',
//   //   description: 'Short 2-3 line description about what this project does and what problem it solves.',
//   //   tags: ['JavaScript', 'HTML', 'CSS'],
//   //   github: 'https://github.com',
//   //   live: 'https://live-demo.com',
//   //   image: null
//   // },
//   // {
//   //   name: 'Project Six',
//   //   description: 'Short 2-3 line description about what this project does and what problem it solves.',
//   //   tags: ['Java', 'Spring', 'MySQL'],
//   //   github: 'https://github.com',
//   //   live: null,
//   //   image: null
//   // },
//   // {
//   //   name: 'Project Six',
//   //   description: 'Short 2-3 line description about what this project does and what problem it solves.',
//   //   tags: ['Java', 'Spring', 'MySQL'],
//   //   github: 'https://github.com',
//   //   live: null,
//   //   image: null
//   // },
// ]

// function ProjectCard({ project }) {
//   const cardRef = useRef(null)
//   const [dims, setDims] = useState({ w: 0, h: 0 })

//   useEffect(() => {
//     const update = () => {
//       if (cardRef.current) {
//         setDims({
//           w: cardRef.current.offsetWidth,
//           h: cardRef.current.offsetHeight
//         })
//       }
//     }
//     update()
//     window.addEventListener('resize', update)
//     return () => window.removeEventListener('resize', update)
//   }, [])

//   const perimeter = dims.w && dims.h ? 2 * (dims.w + dims.h) : 1400

//   return (
//     <div ref={cardRef} className="project-card">

//       {/* SVG animated border — same as experience */}
//       <svg className="proj-border-svg" xmlns="http://www.w3.org/2000/svg">
//         <rect
//           className="proj-border-rect"
//           x="1" y="1"
//           width={dims.w - 2}
//           height={dims.h - 2}
//           rx="13" ry="13"
//           style={{
//             strokeDasharray: perimeter,
//             strokeDashoffset: perimeter
//           }}
//         />
//       </svg>

//       {/* PROJECT IMAGE */}
//       <div className="proj-image">
//         {project.image
//           ? <img src={project.image} alt={project.name} />
//           : <div className="proj-placeholder">
//               <span>{ project.name.charAt(0) }</span>
//             </div>
//         }
//         {/* overlay on hover */}
//         <div className="proj-overlay">
//           <div className="proj-links">
//             {project.github && (
//               <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
//                 GitHub
//               </a>
//             )}
//             {project.live && (
//               <a href={project.live} target="_blank" rel="noreferrer" className="proj-link proj-link-live">
//                 Live Demo
//               </a>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* PROJECT BODY */}
//       <div className="proj-body">
//         <h4 className="proj-name">{project.name}</h4>
//         <p className="proj-desc">{project.description}</p>
//         <div className="proj-tags">
//           {project.tags.map((tag, i) => (
//             <span key={i} className="proj-tag">{tag}</span>
//           ))}
//         </div>
//       </div>

//     </div>
//   )
// }

// function Projects() {
//   return (
//     <section id="projects">
//       <div className="proj-header">
//         <h2>My <span>Projects</span></h2>
//         <p>Things I have built and shipped</p>
//       </div>
//       <div className="proj-grid">
//         {projects.map((project, i) => (
//           <ProjectCard key={i} project={project} />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Projects


// // service Id service_cfpcnzm
// // 1EdNEisEmyRRXLC4i  API key
// // template_918e09a

import './Projects.css'

const projects = [
  {
    name: 'AI Driven Hyperlocal Dynamic Machine Learning Model To Predict Crop Yield',
    description:
      'Built an end-to-end crop yield prediction system by integrating Google Earth Engine (GEE) with Machine Learning (ML) and Deep Learning (DL) techniques',
    tags: ['ML', 'DL', 'Google Earth Engine', 'Streamlit'],
    github: 'https://github.com/patil-manish18/Crop-Yield-Prediction',
    live: 'https://predicting-cropyield.streamlit.app/',
    image: '/src/assets/p1.jpg'
  },

  {
    name: 'Fake Product Detection Using Blockchain Technology',
    description:
      'Developed a blockchain-based solution to detect and prevent the circulation of counterfeit products in the supply chain.',
    tags: ['Blockchain', 'Smart Contract', 'React'],
    github:
      'https://github.com/patil-manish18/Fake-Product-Detection-Using-Blockchain-Technology',
    live: null,
    image: '/src/assets/p2.jpg'
  },

  {
    name:
      'Vidhayak Bharti - Preservation of child rights and child protection in society',
    description:
      'Designed and developed a responsive, user-friendly website for Vidhayak Bharti, an NGO working for child rights and protection.',
    tags: ['Python', 'Flask', 'SQL'],
    github: 'https://github.com/patil-manish18/VidhayakBharti',
    live: 'https://vidhayakbharti.org/',
    image: '/src/assets/p3.png'
  }
]

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      {/* IMAGE */}
      <div className="proj-image">

        {project.image ? (
          <img src={project.image} alt={project.name} />
        ) : (
          <div className="proj-placeholder">
            <span>{project.name.charAt(0)}</span>
          </div>
        )}

        {/* BUTTONS */}
        <div className="proj-overlay">
          <div className="proj-links">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="proj-link proj-link-live"
              >
                Live Demo
              </a>
            )}

          </div>
        </div>

      </div>

      {/* BODY */}
      <div className="proj-body">

        <h4 className="proj-name">
          {project.name}
        </h4>

        <p className="proj-desc">
          {project.description}
        </p>

        <div className="proj-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="proj-tag">
              {tag}
            </span>
          ))}
        </div>

      </div>

    </div>
  )
}

function Projects() {
  return (
    <section id="projects">

      <div className="proj-header">
        <h2>
          My <span>Projects</span>
        </h2>

        <p>
          Things I have built and shipped
        </p>
      </div>

      <div className="proj-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
          />
        ))}
      </div>

    </section>
  )
}

export default Projects