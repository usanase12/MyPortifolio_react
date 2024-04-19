import React from 'react'
import Header from './components/Header/Header'
// import Footer from './components/footer'
import Home from './components/pages/home/Home'
import About from './components/pages/About/About'
import Service from './components/pages/Service/Service'
import Resume from './components/pages/Resume/Resume'
import Contact from './components/pages/Contact/Contact'
import {BrowserRouter as Router , Routes, Route ,Link} from 'react-router-dom'
function App() {
  return (
<>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  
  </Router>
</>


  )
}

export default App