import React from 'react'
import ankush from '../assets/mist.png'
const Career = () => {
  return (
    <div className="main p-0 flex">
            <div className='w-[60vw] p-2 py-[50px] h-[500px] border-[2px] rounded-lg bg-white-900  font-bold uppercase text-[50px]'>
              Your need, a thriving <br />
               career. <br />
           Our Promise, to teach <br />
           you skills that thrive <br />

         <div className="btn  bg-slate-400 ">
          <button className='btn2  w-28'>Contact</button>
         </div>
          </div>
            <div className='w-[38vw] px-2 bg-slate-400 rounded-lg h-[450] border-[2px]'>
              <img className='' src={ankush} alt="" />
              <div className="ankush font-bold text-3xl">
                  Ankush <br />
                  Full stack developer <br />
                  Corprate Trainer<br />
                  </div>
                  <p>
                  A full stack developer is proficient in both front-end and back-end development. They build user interfaces using HTML, CSS, and JavaScript, ensuring responsiveness across devices. Simultaneously, they develop server-side logic and manage databases using languages like JavaScript (Node.js), Python, Ruby, or Java, along with.
                  </p>
                
            </div>
    </div>
  )
}

export default Career
