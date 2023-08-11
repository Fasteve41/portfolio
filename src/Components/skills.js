import React,{useEffect} from 'react'
import './portfolio.css'
import {motion, useAnimation} from 'framer-motion';
import {FaAppStore, FaGithub, FaJs, FaReact, FaSass} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import {Link} from "react-scroll"

function Skills() {
  
 const { ref, inView} = useInView();

  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if(inView){
      animation.start({
        x: "0", opacity: 1,
        transition : {
          delay: 0.3 , duration: 0.5, type: 'spring' , stiffness: "120" 
        },
      })
    } else{
      animation.start({x: "-200px" , opacity: 0 })
    }
  })

  return (
    <div name= "skills" className='Skill' >
        <motion.div 
          initial ={{opacity: 0}} 
          animate ={{opacity : 1}}
          transition = {{delay: 0.5 , duration: 1, type: 'spring' , stiffness: "120" }}
          className='skill-first'>
            <h2>WHAT I DO</h2>
            <h3>I'am a Freelance Front-end Developer with over 2 years of experience in creating responsive and user-friendly websites and web applications</h3>
            <Link to= "projects" smooth={true} duration={500}><button>See my work</button></Link>
            <motion.img  
              initial ={{opacity: 0}}
              animate ={{opacity: 1}}
              transition={{delay: 0.5, duration:0.5}}
              src= './images/land.png' 
            />
        </motion.div>
        <div className='skill-sec'>
          <motion.h1 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration:0.5}}>
            Skills
          </motion.h1>
          <div ref = {ref}className='set'>
            <motion.div 
              className='set-box'
              animate = {animation}
            >
              <h2>Javascript  <FaJs className='arrow'/> </h2>
              <p>Create responsive and user-friendly interface to efficiently showcase clients products or services,<span>Learn more</span></p> 
            </motion.div>
            <motion.div 
              className='set-box'
              animate ={animation}
          >
              <h2>React <FaReact className='arrow'/></h2>
              <p>I use React to create dynamic and interactive web pages that load fast and has great user experience.<span>Learn more</span></p> 
            </motion.div>
            <motion.div 
              className='set-box'
              animate ={animation}
            >
              <h2>Sass <FaSass className='arrow'/></h2>
              <p>I write clean,stable,Powerful and stable CSS to help in working quickly and efficiently.<span>Learn more</span></p>
            </motion.div>
            <motion.div 
              className='set-box'
              animate ={animation}
             >
              <h2>Git & Github <FaGithub className='arrow'/></h2>
              <p>I write clean,stable,Powerful and stable CSS to help in working quickly and efficiently.<span>Learn more</span></p>
            </motion.div>
            <motion.div 
              className='set-box'
              animate ={animation}
             >
              <h2>React Native<FaAppStore className='arrow'/></h2>
              <p>I create and efficiently.<span>Learn more</span></p>
            </motion.div>
          </div>
        </div>
    </div>
  )
}
export default Skills