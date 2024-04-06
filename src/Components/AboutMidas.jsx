import React from 'react'
import md1 from "../assets/md2.jpeg"
const AboutMidas = () => {
  return (
    <div> <div className="main mt-14  min-h-[87%] ">
    <h1 className="about w-full flex justify-center pt-14 text-3xl font-bold">
      About Us
    </h1>
    <div className="mist-thought min-h-12 w-[80%] ml-20 pl-28  mt-4">
      Midas Institute mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course I Can Do It". We aim to do this by providing exceptional up skilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.
    <div className="pic  h-screen w-[100%] flex justify-center items-center">
      <img className="img1 px-40 rounded-lg" src={md1} alt="" />
    </div>
    </div>
    </div></div>
  )
}

export default AboutMidas