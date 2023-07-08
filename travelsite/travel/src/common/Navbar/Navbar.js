import React, { useState } from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";


const Navbar = () => {
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
    <div>
    <nav className='navbar'>
    <div className="container flex_space">
      <div className="menu-icon" onClick={handleClick} >
        <i className= {click? 'fas fa-times': "fas fa-bars"}></i>
      </div>
   
    <ul className={click? "nav-menu active" : "nav-menu"}>
    
    <li> <Link to ='/'onClick={closeMobileMenu} >Home</Link></li>
    <li> <Link to = '/about' onClick={closeMobileMenu}>About</Link></li>
    <li> <Link to = '/gallery'onClick={closeMobileMenu} >Gallery</Link></li>
    <li> <Link to = '/destination'onClick={closeMobileMenu} >Destination</Link></li>
    <li> <Link to = '/blog'onClick={closeMobileMenu} >Blog</Link></li>
    <li> <Link to = '/testimonail'onClick={closeMobileMenu} >Testimonail</Link></li>
    <li> <Link to = '/contact'onClick={closeMobileMenu} >Contact Us</Link></li>
    
  </ul>
  <div className="login-area flex">
   
    <li>
        <Link to='contact'>
            <button className='primary-btn'>Request a Quote</button>
        </Link>
    </li>
  </div>
  </div>
  </nav>

  <header>
    <div className="container flex_space">
        
        <div className="contact flex_space">
            <div className="box flex_space">
                <div className="icons">
                    <i className='fas fa-clock'></i>
                </div>
                <div className="text">
                    <h4>Working Hours</h4>
                    <Link to = "/contact">Monday - Sunday: 9:00am to 6:00pm</Link>
                </div>
            </div>

         


        </div>
    </div>
  </header>
  </div>


  )
}

export default Navbar