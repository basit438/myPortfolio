import React from 'react'

function info() {
  return (
    <div className="about-info grid">
    <div className="about-box">
    <i class='bx bxs-award about-icon'></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">Developed a range of dynamic and responsive web applications.</span>
    </div>
    <div className="about-box">
    <i class='bx bxs-briefcase-alt-2 about-icon' ></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">Completed over 20 mini projects and several major projects.</span>
    </div>
    <div className="about-box">
    <i class='bx bx-support about-icon' ></i>
        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">Providing ongoing support and updates.</span>
    </div>
</div>

  )
}

export default info
