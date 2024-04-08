import React from 'react'
import cr from "../../assets/Gallery/career.jpeg"
const Career = () => {
    return (
        <div>
            <div className="pt-10">
            <div className="w-full text-white flex justify-center text-3xl font-bold rounded-md bg-[#7dc116]">
                Career oriented programs
            </div>
            </div>
            <div className="flex ">
                <div className="left">
                    <img className="h-80 pt-10 px-10 rounded-md" src={cr} alt="" />
                </div>
                <div className="right flex-1 pt-12">
                    Make your career flourish and thrive in the field of IT sector with our career-driven courses, including Data Science, DevOps, Cloud computing , Bigdata Hadoop, Digital Marketing, Web development and Software Development, among others. Choose the field according to your interest and passion for an affluent and buoyant future.
                </div>
            </div>
            
        </div>
    )
}

export default Career