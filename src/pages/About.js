import React from 'react'
import AboutHeader from '../components/About/AboutHeader'
import Experience from '../components/About/Experience'
import Infomation from '../components/About/Infomation'
import MySkills from '../components/About/MySkills'


function About() {
  return (
    <div className='about-container'>
      <AboutHeader />
      <Infomation />
      <div className='line-col'></div>
      <MySkills />
      <div className='line-col'></div>
      <Experience />
    </div>
  )
}

export default About