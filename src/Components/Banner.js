import React from 'react'
import "./portfolio.css"
import {motion} from 'framer-motion';
import {Link} from "react-scroll"



function Banner (){
  return (
    <div name ="banner" className='hero'>
      <motion.div 
        className='Banner'
        initial ={{ x: "-200px", opacity: 0}} 
        animate ={{ x: "0", opacity : 1}}
        transition = {{delay: 0.5 , duration: 0.5, type: 'spring' , stiffness: "120" }}
        >
        <h1>Nice to Meet You,<br/> I'm <span>Ajayi Femi.</span></h1>
        <h4>I am based in Nigeria,I am a Front-end developer,<br/>Passionate about building high performance web apps. </h4>
        <Link to="skills" smooth={true} duration={500}><h3>About Me</h3></Link>
      </motion.div>
      <motion.div 
         initial= {{ opacity:0}} 
         animate= {{ opacity:1}}
         transition={{delay: 0.8, duration:0.6}}
         className='Banner-image' >
        <img src='./images/pic8.png'/>
      </motion.div>
    </div>
  )
}

export default Banner