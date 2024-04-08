import React from 'react'
import men1 from "../../assets/Student/man1.jpeg"
import men2 from "../../assets/Student/men2.jpeg"
import men3 from "../../assets/Student/men3.jpeg"
const Student = () => {
  return (
    <div>
        <div className="pt-10">
        <div className='w-full text-white flex justify-center  text-3xl font-bold rounded-md bg-[#7dc116]'>
        Our students success story
        </div>
        <div className="carousel  carousel-center w-full p-4 space-x-4 bg-neutral ">
  <div className="carousel-item">
    <img src={men1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={men2} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={men3} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={men1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={men1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={men1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={men1} className="rounded-box" />
  </div>

</div>
        </div>

    </div>
  )
}

export default Student