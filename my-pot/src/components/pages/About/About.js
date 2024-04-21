import React from 'react'
import Image from "../../../images/women2.jpg";
import "./About.css"
function About() {
  return (
    <div className='about'>
        
       <div className='image'><img src={Image} alt='' /></div> 
       <div className="par">
        <h1>About ME</h1>
        <p>
          As a front-end developer, I specialize in creating captivating and
          user-friendly websites. Using HTML, CSS,
          and JavaScript, I transform design concepts into responsive and interactive interfaces. With a
          focus on innovation and collaboration, I deliver high-quality
          solutions that exceed client expectations and push the boundaries of
          web development.
        </p>
        <div className="but">
          <button className="butt">HIRE ME</button>
          <button className="butto">
            <a href="file:///C:/Users/USER/Downloads/Sophie-CV.pdf" target="_blank">DOWNLOAD MY CV</a>
          </button>
        </div>
      </div>
      
    </div>
    
  )
}

export default About