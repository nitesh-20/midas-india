import React from 'react'
import Navbar from './Components/Navbar'
import Landscape from './Components/Landscape'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Courses from "./Pages/Courses"
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path:"/about",
      element: <><Navbar/><About/></>
    },
    {
      path:"/contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path:"/courses",
      element: <><Navbar/><Courses/></>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}/>
      {/* <Navbar/> */}
      <Landscape/>
      
    </div>
  )
}

export default App
