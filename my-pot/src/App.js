import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer'
import Home from './components/pages/home/Home'
import About from './components/pages/About/About'
import Service from './components/pages/Service/Service'
import Resume from './components/pages/Resume/Resume'
import Contact from './components/pages/Contact/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App