import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <>
        <div className="sidebar-container">
          <div className="sidebar">
            <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i class="fa-solid fa-circle-user fa-lg sidebar-logos"></i>
              </div>
              <div className="sidebar-heading">
                <h6>ABOUT</h6>
              </div>
            </div>
            </NavLink>
            <NavLink to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i class="fa-solid fa-briefcase fa-lg sidebar-logos"></i>
              </div>
              <div className="sidebar-heading">
                <h6>PROJECTS</h6>
              </div>
            </div>
            </NavLink>
            <NavLink to="/resume" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i class="fa-solid fa-file fa-lg sidebar-logos"></i>
              </div>
              <div className="sidebar-heading">
                <h6>RESUME</h6>
              </div>
            </div>
            </NavLink>
            <NavLink to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i class="fa-solid fa-comments fa-lg sidebar-logos"></i>
              </div>
              <div className="sidebar-heading">
                <h6>CONTACT</h6>
              </div>
            </div>
            </NavLink>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i class="fa-solid fa-xmark fa-lg sidebar-logos"></i>            
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Sidebar
