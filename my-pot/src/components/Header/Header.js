import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='navbar'>
        <ul>
        <li><Link to ='/'>HOME</Link></li>
        <li><Link to ='/about'>ABOUT</Link></li>
        <li><Link to='/service'>SERVICE</Link></li>
        <li><Link to='/resume'>RESUME</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
    </div>
  )
}

export default Header