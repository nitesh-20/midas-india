import React from 'react'
import md1 from "../assets/md2.jpeg"
import recruitment from "../assets/recruitment.jpg"
import recruitment1 from "../assets/recruitment1.jpg"
const About = () => {
  return (
    <div className="container w-full h-full border-2 ">
          
          <div className="main  mt-14 border-4 min-h-[87%] ">
          <h1 className="about w-full flex justify-center pt-14 text-3xl font-bold">
            About Us
            </h1>
            <div className="mist-thought min-h-18 w-[80%] ml-20 pl-16  mt-6">
          <p>Midas Institute mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course I Can Do It". We aim to do this by providing exceptional up skilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.</p>
          </div>

        <div className="pic pt-1 h-screen w-[100%] flex justify-center items-center">
          <img className="img1 px-40 rounded-lg" src={md1} alt="" />
        </div>

        <div className="recruitment w-full flex justify-center text-3xl font-bold bg-[#7dc116]">
        Our recruitment partners
        </div>
      {/* Recruitment partners */}
          <div className="recruitment flex justify-center pt-8 ">
          <div className="carousel w-3/3 ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={recruitment} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={recruitment1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
          </div>
          </div>
        {/* faculty */}
        <div className="faculty pt-8 flex justify-center">
            <h1>Our Faculty</h1>
        </div>
    </div>
  )
}

export default About