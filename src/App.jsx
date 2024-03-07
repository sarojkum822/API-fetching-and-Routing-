import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Service from './Components/Service'
import Blog from './Components/Blog'
import About from './Components/About'

const App = () => {
  return (

    <>
        <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/about' element={<About/>}/>
            {/* <Route path='/contact' element={<Contact/>}/> */}
            {/* <Route path='/about' element={<Register/>}/> */}

          </Routes>
   

    </>
  )
}

export default App