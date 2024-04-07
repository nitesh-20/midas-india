import React from 'react'
import md1 from "../../assets/md2.jpeg"
const AboutMidas = () => {
  return (
    <div> 
    <div className="about w-full flex justify-center pt-16 text-3xl font-bold">
      About Us
    </div>
    <div className="mist-thought  mt-6  min-h-[87%]  w-[80%]  ml-20 pl-28 ">
    Make your career flourish and thrive in the field of IT sector with our career-driven courses, including Data Science, DevOps, Cloud computing , Bigdata Hadoop, Digital Marketing, Web development and Software Development, among others. Choose the field according to your interest and passion for an affluent and buoyant future.
    <div className="pic  h-96 w-[100%] flex justify-center items-center">
      <img className="img1 px-40 rounded-lg" src={md1} alt="" />
    </div>
    </div>
    </div>
  )
}

export default AboutMidas