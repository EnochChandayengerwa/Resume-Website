import React from 'react'
import "./projects.css"
import PB from './PB'
import Mark from "../../assets/mark.jpg"
import News from "../../assets/news.png"
import Luno from "../../assets/luno.webp"
import File from "../../assets/file.webp"
import Msg from "../../assets/msg.jpg"
import Thumbnail from "../../assets/alessio-soggetti-17_tB-oI0ao-unsplash.jpg"

function Projects() {
  return (
    <section id="projects">
      <h5>Browse</h5>
      <h2>My Projects</h2>
      <button className='btn'>Github</button>
      <br></br>
      <br></br>

      <div className="container projects__container">
        <div className="project">
            <img src={Mark} alt="project thumbnail" />
            <article>Wits CSAM Marking System</article>
            <small>PERN Stack</small>
            <PB/>
        </div>
        <div className="project">
            <img src={News} alt="project thumbnail" />
            <article>News App</article>
            <small>Java & Android</small>
            <PB/>
        </div>
        <div className="project">
            <img src={Luno} alt="project thumbnail" />
            <article>Crypto Bot - LUNO Feed</article>
            <small>Python</small>
            <PB/>
        </div>
        <div className="project">
            <img src={File} alt="project thumbnail" />
            <article>File Manager Automation</article>
            <small>Python</small>
            <PB/>
        </div>
        <div className="project">
            <img src={Thumbnail} alt="project thumbnail" />
            <article>Resume Website</article>
            <small>React, JS, HTML, CSS</small>
            <PB/>
        </div>
        <div className="project">
            <img src={Msg} alt="project thumbnail" />
            <article>Wits Reddit Forum App</article>
            <small>Java & Android</small>
            <PB/>
        </div>
      </div>
    </section>
  )
}

export default Projects