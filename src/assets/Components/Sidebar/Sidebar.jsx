import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SidebarContext } from '../../Context/SidebarContext'

function Sidebar() {
  const sidebarState = useContext(SidebarContext)
  console.log('here', sidebarState)

  const handleClick = () => {
    console.log('clicked');
    sidebarState.setclassName('sidebar-container cross');
  }

  return (
    <>

        <div className={sidebarState.className} style={sidebarState.style}>
          <div className="sidebar">
            <NavLink to="/" style={({isActive}) => isActive ? { textDecoration: "none", color: "#fe655c" } : { textDecoration:"none", color: "inherit"}}>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i className="fa-solid fa-circle-user fa-lg sidebar-logos"></i>
              </div>
              <div className="sidebar-heading">
                <h6>ABOUT</h6>
              </div>
            </div>
            </NavLink>
            <NavLink to="/projects" style={({isActive}) => isActive ? { textDecoration: "none", color: "#fe655c" } : { textDecoration:"none", color: "inherit"}}>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i className="fa-solid fa-briefcase fa-lg sidebar-logos"></i>
              </div>
              <div className="sidebar-heading">
                <h6>PROJECTS</h6>
              </div>
            </div>
            </NavLink>
            <NavLink to="/resume" style={({isActive}) => isActive ? { textDecoration: "none", color: "#fe655c" } : { textDecoration:"none", color: "inherit"}}>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i className="fa-solid fa-file fa-lg sidebar-logos"></i>
              </div>
              <div className="sidebar-heading">
                <h6>RESUME</h6>
              </div>
            </div>
            </NavLink>
            <NavLink to="/contact" style={({isActive}) => isActive ? { textDecoration: "none", color: "#fe655c" } : { textDecoration:"none", color: "inherit"}}>
            <div className="sidebar-content">
              <div className="sidebar-logo-container">
                <i className="fa-solid fa-comments fa-lg sidebar-logos"></i>
              </div>
              <div className="sidebar-heading">
                <h6>CONTACT</h6>
              </div>
            </div>
            </NavLink>
            <div className="sidebar-content" id='cross-bar' onClick={handleClick}>
              <div className="sidebar-logo-container">
                <i className="fa-solid fa-xmark fa-lg sidebar-logos"></i>            
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Sidebar
