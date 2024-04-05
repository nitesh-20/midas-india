import React from 'react'
import md1 from "../assets/md2.jpeg"
const About = () => {
  return (
    <div className="container w-full h-full border-2 ">
          
          <div className="main mt-16 border-4 min-h-[87%] ">
          <h1 className="about w-full flex justify-center pt-14 text-3xl font-bold">
            About Us
            </h1>
            <div className="mist-thought min-h-18 w-full mt-6">
          <p>Midas Institute mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course I Can Do It". We aim to do this by providing exceptional up skilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.</p>
          </div>

        <div className="pic pt-1 h-screen w-[100%] flex justify-center items-center">
          <img className="img1 px-40" src={md1} alt="" />
        </div>

        <div className="recruitment  w-full flex justify-center  text-3xl font-bold">
        Our recruitment partners
        </div>
          </div>


    </div>
  )
}

export default About