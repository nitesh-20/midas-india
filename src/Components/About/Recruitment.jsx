import React from 'react'
import recruitment from "../../assets/recruitment.jpg"
import recruitment1 from "../../assets/recruitment1.jpg"
const Recruitment = () => {
  return (
    <div>
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
    </div>
  )
}

export default Recruitment