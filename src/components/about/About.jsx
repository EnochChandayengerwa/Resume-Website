import React from 'react'
import "./about.css"
import ME from "../../assets/Profile 2.jpg"
import {AiFillDatabase} from "react-icons/ai"
import {AiOutlineCloudDownload} from "react-icons/ai"
import {SiEthereum} from "react-icons/si"


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
            <div className="about__me-image">
              <img src={ME} alt="profile image" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiFillDatabase className='about_icon'/>
              <h5>Data, AI and Machine Learning</h5>
              {/* <small>Data Science and Analytic solutions <br></br> using AI and Machine Learning</small> */}
            </article>
            <article className='about__card'>
              <AiOutlineCloudDownload className='about_icon'/>
              <h5>Cloud Computing, AWS and MS Azure</h5>
              {/* <small>Cloud Architecture and DevOps <br></br>with MS Azure and AWS</small> */}
            </article>
            <article className='about__card'>
              <SiEthereum className='about_icon'/>
              <h5>Blockchain Technologies</h5>
              {/* <small>Technologies such as ehtherium dapps<br></br> solidity and cryptocurrency exchanges</small> */}
            </article>
          </div>
          <p>Hi, I'm Enoch.
          A 3rd-year Computer Science student passionate about developing
          software solutions and consulting. I'm competent in Data and AI, Cloud
          Development, Fintech, and Blockchain technologies.
          </p>

          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>

      </div>


    </section>
  )
}

export default About