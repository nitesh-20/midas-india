import React from 'react'
import imm from "../../assets/Gallery/g1.jpeg"
const HeroSection = () => {
  return (
    <div>
        <section className="py-24">
  <div className="container flex items-center">
    {/* <!-- Left side: Text about coding --> */}
    <div className="flex-1">
      <div className="max-w-lg mx-auto">
        <p className="uppercase text-3xl font-bold text-gray-500 mb-4">Midas institute of software technology</p>
       
        <p className="text-lg mt-8 mb-4">
        Looking to improve your coding skills or start your journey in programming? I offer personalized coaching sessions to help you achieve your coding goals. Whether you're a beginner or an experienced coder, I'm here to guide you through the process.
        </p>
        <a href="/contact" className="btn bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">Contact</a>
      </div>
    </div>

    {/* <!-- Right side: Image --> */}
    <div className="flex-1">
      <img src={imm}  className="w-full rounded-lg md:max-w-2xl mx-auto" />
    </div>
  </div>
</section>

    </div>
  )
}

export default HeroSection