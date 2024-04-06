import React from 'react'

import recruitment from "../assets/recruitment.jpg"
import recruitment1 from "../assets/recruitment1.jpg"
import g1 from "../assets/Gallery/g1.jpeg"
import g2 from "../assets/Gallery/g2.jpeg"
import g3 from "../assets/Gallery/g3.jpeg"
import g4 from "../assets/Gallery/g4.jpeg"
import g5 from "../assets/Gallery/g5.jpeg"
import g6 from "../assets/Gallery/g6.jpeg"
import AboutMidas from '../Components/AboutMidas'
const About = () => {
  return (
    <div className="border-2">
          <AboutMidas/>
     

        <div className="recruitment text-white w-full flex justify-center text-3xl font-bold bg-[#7dc116]">
          Our recruitment partners
        </div>
      
        {/* Recruitment partners */}
        <div className="recruitment flex justify-center pt-10">
          <div className="carousel w-3/3 ">
            <div id="slide1" className=" w-full">
              <img src={recruitment} className="w-full" />

            </div>
            <div id="slide2" className=" w-full">
              <img src={recruitment1} className="w-full" />

            </div>
          </div>
        </div>

      {/* Gallery */}
      <div className="pt-14">
        <h1 className='recruitment text-white w-full flex justify-center text-3xl font-bold bg-[#7dc116]'>
          Gallery
        </h1>

        <div className="h-96 mt-14  grid grid-cols-3 gap-4  w-full rounded-box">
            <img className="rounded-lg" src={g1} />
            <img className="rounded-lg" src={g2} />
            <img className="rounded-lg" src={g3} />
            <img className="rounded-lg" src={g4} />
            <img className="rounded-lg" src={g6} />
            <img className="rounded-lg" src={g5} />
        </div>
      </div>

      {/* faculty */}
      <div className="">
        <h1 className='recruitment w-full text-3xl font-bold bg-[#7dc116]'>
          Board Of Directors Profiles
        </h1>
        <code>
          hello this is code 
        </code>
      </div>
    </div>
  )
}

export default About;