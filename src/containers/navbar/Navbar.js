import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.png'
const Navbar = () => {
    return (
        <>
          <div className="nav-outer-container">
              <div className="nav-brand">
                  <img src={logo} alt="" />
              </div>
              <div className='nav-links'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Features</a>
                <a href=""><Link to="signup">Sign up</Link></a>
              </div>
              </div>  
        </>
    )
}

export default Navbar
