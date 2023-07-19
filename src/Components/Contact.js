import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaTwitter,} from "react-icons/fa";

function Contact() {
  return (
    <div name= "contact" className='Contact' 
       >
      <div className='Contact-1'>
        <h1>CONTACT</h1>
        <h4>Great vision without great people is irrelevant.<br/>Let's work together.Love to hear from you<br/>Get in touch</h4>
        <div className='socials'>
          <a href=''><FaGithub className='social-icon'/></a>
          <a href='https://twitter.com/oluwalipsey'><FaTwitter className='social-icon' /></a>
          <a href='https://www.instagram.com/fasteve_king/?next=%2F'><FaInstagram className='social-icon'/></a>
          <a href=''><FaFacebook className='social-icon'/></a>
        </div>
      </div>
      <div className='Contact-2'>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='message' placeholder='Message' className='message'/>
        <button>Send Message</button>
      </div> 
    </div>
    
  )
}

export default Contact