import React from 'react'
import explore from "../../assets/Gallery/explore.jpeg"
const Explore = () => {
  return (
    <div>
        <div className="w-full text-white flex justify-center pt-2 text-3xl font-bold rounded-md bg-[#7dc116]">
            Explore the Best
        </div>
        <div className="flex ">
        <div className="left">
                <img className="h-80 pt-10 px-10 rounded-lg" src={explore} alt="" />
        </div>
        <div className="right flex-1 pt-12">
        Get trained and certified in the most burgeoning technologies of the industry. Find the foremost trained team of Experienced and Certified professionals. Exposure to live and practical based training for enhanced experience with On-Premises Global Certification exam facility.
        </div>
        </div>
    </div>
  )
}

export default Explore