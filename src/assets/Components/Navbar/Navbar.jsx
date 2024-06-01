import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="navbar">
        <div className="left-navbar">
          <span className="material-icons left-navbar">
          menu
          </span>
        </div>
        <div className="center-navbar">
          {/* <div className="logo-box"> */}
            <i class="fa-brands fa-github fa-lg logos"></i>
            <i class="fa-brands fa-linkedin-in fa-lg logos"></i>
            <i class="fa-regular fa-envelope fa-lg logos"></i>
          {/* </div> */}
        </div>
      </div>

    </>
  )
}

export default Navbar
