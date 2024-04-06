import React from 'react'
import md1 from "../assets/md2.jpeg"
import recruitment from "../assets/recruitment.jpg"
import recruitment1 from "../assets/recruitment1.jpg"
import g1 from "../assets/Gallery/g1.jpeg"
import g2 from "../assets/Gallery/g2.jpeg"
import g3 from "../assets/Gallery/g3.jpeg"
import g4 from "../assets/Gallery/g4.jpeg"
import g5 from "../assets/Gallery/g5.jpeg"
import g6 from "../assets/Gallery/g6.jpeg"
const About = () => {
  return (
    <div className="w-full h-full border-2 ">

      <div className="main  mt-14  min-h-[87%] ">
        <h1 className="about w-full flex justify-center pt-14 text-3xl font-bold">
          About Us
        </h1>
        <div className="mist-thought min-h-12 w-[80%] ml-20 pl-28  mt-4">
          <p>Midas Institute mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course I Can Do It". We aim to do this by providing exceptional up skilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.</p>
        </div>

        <div className="pic  h-screen w-[100%] flex justify-center items-center">
          <img className="img1 px-40 rounded-lg" src={md1} alt="" />
        </div>

        <div className="recruitment text-white w-full flex justify-center text-3xl font-bold bg-[#7dc116]">
          Our recruitment partners
        </div>
        {/* Recruitment partners */}
        <div className="recruitment flex justify-center pt-10 ">
          <div className="carousel w-3/3 ">
            <div id="slide1" className=" w-full">
              <img src={recruitment} className="w-full" />
              
            </div>
            <div id="slide2" className=" w-full">
              <img src={recruitment1} className="w-full" />
            
            </div>
          </div>
        </div>
      </div>
      {/* faculty */}
      {/* <div className=" pt-16">
          <h1 className='recruitment w-full flex justify-center text-3xl font-bold bg-[#7dc116]'>
          Board Of Directors Profiles
          </h1>

        </div> */}

      {/* Gallery */}
      <div className="gallery pt-14">
        <h1 className='recruitment text-white w-full flex justify-center text-3xl font-bold bg-[#7dc116]'>
          Gallery
        </h1>

        <div className="h-96 mt-14  grid grid-cols-3 gap-4  w-full rounded-box">
          <div className=" h-full">
            <img className="rounded-lg" src={g1} />
          </div>
          <div className=" h-full">
            <img className="rounded-lg" src={g2} />
          </div>
          <div className=" h-full">
            <img className="rounded-lg" src={g3} />
          </div>
          <div className=" h-full">
            <img className="rounded-lg" src={g4} />
          </div>
          <div className=" h-full">
            <img className="rounded-lg" src={g6} />
          </div>
          <div className=" h-full">
            <img className="rounded-lg" src={g5} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;