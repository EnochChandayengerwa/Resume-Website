import React from 'react'
import './contact.css'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact">
      <h5>Get in touch</h5>

      <div className='contact_links'>
        <a href="https://lec.enoch@outlook.com" className="btn btn-primary">Email Me - lec.enoch@outlook.com</a>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
    </div>

    </div>
  )
}

export default Contact