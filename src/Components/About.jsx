import './About.css'
import Skills from './Skills' 

const education = [
  {
    year: '2019',
    level: 'SSC',
    school: 'R.R. Vidyalaya',
    board: 'State Board',
    score: '95%',
    color: '#378ADD'
  },
  {
    year: '2021',
    level: 'HSC',
    school: 'Swami Vivekanand Junior College',
    board: 'State Board',
    score: '95.6%',
    color: '#534AB7'
  },
  {
    year: '2025',
    level: 'B.E. Computer Engineering',
    school: 'Don Bosco Institute of Technology',
    board: 'Mumbai University',
    score: '9.25 CGPA',
    color: '#1D9E75'
  }
]

function About() {
  return (
    <section id="about">

      <div className="about-left">
        <h2>About <span>Me</span></h2>
        <p className="about-text">
          With a strong foundation in web development and problem-solving,
          I enjoy working on real-world challenges and continuously upgrading
          my skills by exploring emerging technologies. I believe in learning
          by building and contributing to products that create real impact.
        </p>
        <p className="about-text">
          I'm eager to learn new emerging technologies and apply my knowledge
          to impactful projects. Excited to connect with like-minded professionals
          and explore opportunities in the tech industry. 𝐀𝐥𝐰𝐚𝐲𝐬 𝐨𝐩𝐞𝐧 𝐭𝐨 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧, 𝐤𝐧𝐨𝐰𝐥𝐞𝐝𝐠𝐞 𝐬𝐡𝐚𝐫𝐢𝐧𝐠, 𝐚𝐧𝐝 𝐦𝐞𝐚𝐧𝐢𝐧𝐠𝐟𝐮𝐥 𝐝𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧𝐬 𝐰𝐢𝐭𝐡𝐢𝐧 𝐭𝐡𝐞 𝐭𝐞𝐜𝐡 𝐜𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲.
        </p>

      </div>

      <div className="about-right">
        
        <div className="edu-list">
          {education.map((edu, index) => (
            <div className="edu-card" key={index}>
              <div className="edu-accent" style={{ background: edu.color }}></div>
              <div className="edu-body">
                <div className="edu-top-row">
                  <span className="edu-level">{edu.level}</span>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-bottom-row">
                  <span className="edu-board">{edu.board}</span>
                  <span className="edu-score" style={{ color: edu.color }}>{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About