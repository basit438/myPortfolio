import React from 'react'
import './services.css'
import { useState } from 'react'

function Services() {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I offer</span>

      <div className="services_container container grid">

      <div className="services_content">
    <div>
        <i className='uil uil-web-grid services_icon'></i>
        <h3 className="services_title">Frontend <br /> Development</h3>
    </div>

    <span className="services_button" onClick={() => toggleTab(3)}>View More {" "} <i className="uil uil-arrow-right services_button-icon"></i> </span>

    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}> 
        <div className="services_modal-content"> 
            <i onClick={() => setToggleState(0)} className="uil uil-times services_modal-close"></i>

            <h3 className="services_modal-title">Frontend Development</h3>
            <p className="services_modal-description">I specialize in creating highly responsive and engaging user interfaces using modern frontend technologies.</p>

            <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Creating dynamic and responsive UIs using React.js</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Building single-page applications (SPAs) for better performance</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Using CSS frameworks like Bootstrap, Tailwind for styling</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Ensuring cross-browser compatibility and responsiveness</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Integrating third-party services and APIs</p>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="services_content">
    <div>
        <i className='bx bx-server services_icon'></i>
        <h3 className="services_title">Backend <br /> Development</h3>
    </div>

    <span className="services_button" onClick={() => toggleTab(2)}>View More {""} <i className="uil uil-arrow-right services_button-icon"></i> </span>

    <div className ={toggleState === 2 ? "services_modal active-modal" : "services_modal"}> 
        <div className="services_modal-content"> 
            <i onClick={() => setToggleState(0)} className="uil uil-times services_modal-close"></i>

            <h3 className="services_modal-title">Backend Development</h3>
            <p className="services_modal-description">I provide backend development services, ensuring secure, scalable, and efficient server-side logic for your applications.</p>

            <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Building and managing RESTful APIs with Node.js and Express</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Database management with MongoDB, Mongoose for data handling</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Implementing authentication with JWT or OAuth</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Handling server-side security and data validation</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Deploying and scaling apps using cloud services (AWS, Heroku, etc.)</p>
                </li>
            </ul>
        </div>
    </div>
</div>
      <div className="services_content">
    <div>
        <i className='bx bx-code-alt services_icon'></i>
        <h3 className="services_title">Full-Stack <br /> Development</h3>
    </div>

    <span className="services_button" onClick={() => toggleTab(1)}>View More {""} <i className="uil uil-arrow-right services_button-icon"></i> </span>

    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}> 
        <div className="services_modal-content"> 
            <i onClick={() => setToggleState(0)} className="uil uil-times services_modal-close"></i>

            <h3 className="services_modal-title">Full-Stack Development</h3>
            <p className="services_modal-description">I offer end-to-end web development services using the MERN stack, building robust and scalable applications.</p>

            <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Building dynamic web apps with React</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Developing RESTful APIs using Node.js and Express</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Database design and management with MongoDB</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Handling authentication and authorization</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Deploying applications on cloud platforms</p>
                </li>
            </ul>
        </div>
    </div>
</div>




      </div>
    </section>
  )
}

export default Services
