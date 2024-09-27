import React from 'react'
import './Home.css'
import ScrollDown from './ScrollDown'

function Data() {
  return (
    <div className="home-data">
        <div className="home-title">
            <h1 className="home-name">Hi, I'm Basit</h1>
           
            <h3 className='home-subtitle'>A Frontend Developer</h3>
            <p className="home-description">I'm passionate about building excellent software that improves the lives of those around me.</p>

            <button  className='contact-btn'><a href="https://www.linkedin.com/in/basit-manzoor-676233223">Contact Me</a></button>
            <ScrollDown/>
        </div>
    </div>
  )
}

export default Data
