import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'



function Projects() {
  return (
    <div name= "projects" className='project' data-aos= 'fade-up' data-aos-duration ='1000'>
      <div className = "project-img1">
        <div className='pro-text'>
          <h1>MY LATEST WORK</h1>
          <h4> I created several Clones web Apps and Landing pages for different clients using HTML,CSS,Javascript,React.js. The Landing pages were designed and optimized for accessibility and performance</h4>
          <a href='https://github.com/Fasteve41'><button >View all Projects</button></a> 
        </div>
        <div className='pro-img'
          data-aos= 'fade-up' data-aos-duration ='1000'
          style={{ 
          backgroundImage: `url("images/pic1.png")`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center" ,
          }}>
          <img src='./images/pic1.png'/>
          <h3>Cara Fashion E-commerce<br/>HTML, CSS, React Javascript</h3>
        </div>
      </div>
      <div className='project-img2'>
        <div 
          className='pro-img'
          data-aos= 'fade-up' data-aos-duration ='1000'
          style={{ 
          backgroundImage: `url("images/pic01.png")`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center" ,
          }}>
          <img src='./images/pic01.png'/>
          <h3>OmniGPT Clone  <br/>HTML, CSS</h3>
        </div>
        <div 
          className='pro-img'
          data-aos= 'fade-up' data-aos-duration ='1000'
          style={{ 
          backgroundImage: `url("images/pic0.png")`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center",
          }}>
          <img src='./images/pic0.png'/>
          <h3>Shoe Shop<br/>HTML,CSS,Javascript</h3>
        </div>
      </div>
    </div>
  )
}

export default Projects