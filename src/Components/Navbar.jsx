import React from 'react'
import "./Navbar.css"

function navbar() {
  return (
   
        <div className= "Nav flex items-center justify-between p-5 ">
       <div className='logo'> <a href='#'>Syed Aatif</a></div>
     <ul className='uli'>
     <li><a  href="#">About Me</a></li>
     <li><a href='#'>Home</a></li>
     <li><a href="#" >Contact</a></li>
     <i class="ri-menu-line"></i>
     </ul>
   </div>
   
  )
}

export default navbar
