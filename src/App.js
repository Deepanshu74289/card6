import React from 'react'
import Navbar from './component/Navbar'
import Card from './component/Card'
import Footer from './component/Footer'
import Form from './component/Form'
import {BrowserRouter, Routes, Route,Link} from"react-router-dom"


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Card/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/home' element={<Card/>}/>


    </Routes>
    <Footer/>
    
    
    
    </BrowserRouter>
    </div>
    

  )
}
