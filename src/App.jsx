import { useState, useEffect } from 'react';
import React from 'react';
import Lottie, { useLottie } from 'lottie-react';
import lottie1 from './assets/lottie1.json';
import { motion } from 'framer-motion';
import Navbar from './components/navbar';
import ParticleBackground from './components/particles';
import Animation from './components/animation';
// import Robot from './components/robot';
import Scene from './components/scene';
import Earth_hologram from './components/Earth_hologram3.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Skills from './components/skills.jsx';
import SkillsCard from './components/skillsCard.jsx';
import About from './components/about.jsx';
import AllSkills from './components/allSkills.jsx';
import Projects from './components/projects.jsx';
import Experiences from './components/experiences.jsx';
const App = () => {

  
  
  return (
    <div className='flex flex-col justify-center items-center  gap-10' >
      <div className='fixed -z-10 h-screen w-screen'>
        <Scene />
      </div>
      <div className='-z-20 relative'>
        <ParticleBackground />
      </div>


    <div className='mb-5'>
      <Navbar/>

    </div>

      <About />

      <AllSkills  />
     
      <Skills  />
      <Projects  />
      <Experiences/>

      {/* </div> */}
    </div>

  )
}
export default App;