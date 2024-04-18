import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='navbar'>
        <ul>
        <li><Link to ='/'>HOME</Link></li>
        <li><Link to ='/About'>ABOUT</Link></li>
        <li><Link to='/Service'>SERVICE</Link></li>
        <li><Link to='/Resume'>RESUME</Link></li>
        <li><Link to='/Contact'>CONTACT</Link></li>
        </ul>
    </div>
  )
}

export default Header