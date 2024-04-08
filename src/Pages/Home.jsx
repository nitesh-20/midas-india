import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import Explore from '../Components/Home/Explore'
import Career from '../Components/Home/Career'
import Student from '../Components/Home/Student'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Explore/>
      <Career/>
      <Student/>
    </div>
  )
}

export default Home