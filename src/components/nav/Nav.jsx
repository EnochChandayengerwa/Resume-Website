import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {CgToolbox} from "react-icons/cg"
import {AiOutlineCode} from "react-icons/ai"
import {BiMailSend} from "react-icons/bi"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPerson /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><CgToolbox /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineCode /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMailSend /></a>

    </nav>
  )
}

export default Nav