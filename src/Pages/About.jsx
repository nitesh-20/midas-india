import React from 'react'
import AboutMidas from '../Components/About/AboutMidas'
import Recruitment from '../Components/About/Recruitment'
import Gallery from '../Components/About/Gallery'
import Directors from '../Components/About/Directors'

const About = () => {
  return (
    <div className="border-2">
          <AboutMidas/>
          <Recruitment/>
          <Gallery/>
          <Directors/>

    </div>
  )
}

export default About;