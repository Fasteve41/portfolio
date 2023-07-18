import React,{useRef} from 'react'
import './portfolio.css'
import {motion} from 'framer-motion';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll"

function Navbar() {
    const navRef = useRef();
    
    const showNavbar= (e) => {
      navRef.current.classList.toggle("responsive_nav");
    }

    return (
    <div className='navbar'>
      <motion.header
        initial ={{ y: "-100px" }}
        animate ={{ y: "0" }}
        transition = {{ delay: 0.3, duration: 0.3}}
        >
        <Link to ="banner" smooth={true} duration={500}> <h3 className ="logo">Fa<span className=''>Steve</span></h3></Link>

        <nav ref = {navRef}>
          <Link to ="banner" smooth={true} duration={500} onClick={showNavbar}> <a href=''>Home </a></Link>
          <Link to = "skills" smooth={true} duration={500} onClick={showNavbar}> <a href=''>Skills</a></Link>
          <Link to="project" smooth={true} duration={500} onClick={showNavbar}> <a href=''>Projects</a></Link>
          <Link to="contact" smooth={true} duration={500} onClick={showNavbar}> <a href=''>Contact</a></Link>
        <button onClick = {showNavbar} className ="nav-btn close-btn">
          <FaTimes/>
        </button>
        </nav>
        <button onClick = {showNavbar} className ="nav-btn">
          <FaBars />
        </button>
      </motion.header>
    </div>
  )
} 
export default Navbar
