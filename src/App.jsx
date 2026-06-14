import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from './Components/Skills'
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import HyperSpaceBg from "./Components/HyperSpaceBg";
import GradientGlowBg from "./Components/GradientGlowBg";
import LightModeBg from './Components/LightModeBg'

import { useState } from 'react'
import './App.css'

function App(){
  const [darkMode, setDarkMode] = useState(true)
  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      {darkMode && <HyperSpaceBg /> }
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <main>
        <Intro />
        <About/>
        <Skills />
        <Experience/>
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App;
