import React from 'react'
import g1 from "../../assets/Gallery/g1.jpeg"
import g2 from "../../assets/Gallery/g2.jpeg"
import g3 from "../../assets/Gallery/g3.jpeg"
import g4 from "../../assets/Gallery/g4.jpeg"
import g5 from "../../assets/Gallery/g5.jpeg"
import g6 from "../../assets/Gallery/g6.jpeg"

const Gallery = () => {
  return (
    <div>  
        {/* Gallery */}
    <div className="pt-14">
      <h1 className='recruitment text-white w-full flex justify-center text-3xl font-bold bg-[#7dc116]'>
        Gallery
      </h1>

      <div className="h-92 mt-14  grid grid-cols-3 gap-4  w-full rounded-box">
          <img className="rounded-lg" src={g1} />
          <img className="rounded-lg" src={g2} />
          <img className="rounded-lg" src={g3} />
          <img className="rounded-lg" src={g4} />
          <img className="rounded-lg h-80" src={g6} />
          <img className="rounded-lg" src={g5} />
      </div>
    </div>
    </div>
  )
}

export default Gallery