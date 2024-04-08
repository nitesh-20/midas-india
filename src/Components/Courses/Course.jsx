import React from 'react'

const Course = () => {
  return (
    <div>
      <div className="main pt-16"></div>
          <div className='w-full text-white flex justify-center  text-3xl font-bold rounded-md bg-[#7dc116]'>
     Courses We offer
        </div>
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Full Stack Devloper</h2>
    <p>Course duration - 8 Months</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default Course