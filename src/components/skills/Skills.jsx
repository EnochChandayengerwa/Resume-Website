import React from 'react'
import "./skills.css"
import {AiFillDatabase} from "react-icons/ai"
import {AiOutlineCloudDownload} from "react-icons/ai"
import {SiEthereum} from "react-icons/si"

const Skills = () => {
  return (
    <section id="skills">
      <h5>Get to know</h5>
      <h2>My Skillset</h2>
      <h5>Core fundamentals in data structures, object-oriented design, algorithm design,
            problem-solving, and complexity analysis.</h5>
            <br></br>
      <div className="container skills__container">
        <div className="heading">
          <div className="text">
            <h2>Programming</h2>
          </div>
          <div className="icons">
          Python • Java • C++ • C# • TypeScript • GO
          </div>
        </div>
        <div className="heading">
          <div className="text">
            <h2>Web & Database</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates modi reprehenderit eum obcaecati soluta quisquam ipsa nostrum aut laborum consequuntur?</p> */}
          </div>
          <div className="icons">
          HTML5 • CSS3 • JavaScript • SQL • Firebase
          </div>
        </div>
        <div className="heading">
          <div className="text">
            <h2>Frameworks</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo et consequuntur nemo soluta expedita neque rerum voluptates! Inventore, adipisci!</p> */}
          </div>
          <div className="icons">
          React • Node.JS • ASP.NET
          </div>
        </div>
        <div className="heading">
          <div className="text">
            <h2>Platforms & Technologies</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur adipisci saepe quam molestiae enim. Dolorum exercitationem aperiam similique eos!</p> */}
          </div>
          <div className="icons">
          Git • Github • Visual Studio • VS Code • Eclipse
          • Android Studio • Figma • Adobe XD • MS 365
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills