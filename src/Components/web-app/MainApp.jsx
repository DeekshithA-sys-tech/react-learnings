import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Homepage from './Homepage'
import Aboutpage from './Aboutpage'
import Contactpage from './Contactpage'
import Navbar from './Navbar'
const MainApp = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'lightgray' , textAlign: 'center' , padding: '10px'}}>web application</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainApp