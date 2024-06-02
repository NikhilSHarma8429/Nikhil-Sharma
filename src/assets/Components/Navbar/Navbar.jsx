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
            <a href="https://github.com/NikhilSHarma8429" target="_blank">
              <i class="fa-brands fa-github logos"></i>
            </a>
            <a href="https://www.linkedin.com/in/nikhil-sharma-4a599221b/" target="_blank">
             <i class="fa-brands fa-linkedin-in logos"></i>
            </a>
            <a href="mailto:sharma842nikhil@gmail.com" target="_blank">
             <i class="cib-gmail logos"></i>
            </a>
            <a href="https://leetcode.com/u/sharma842nikhil/" target="_blank">
              <i class="cib-leetcode logos"></i>
            </a>
            {/* <span class="material-symbols-outlined logos test">
bar_chart
</span> */}
            {/* <img src="leetcode (2).svg" alt="" className="logos test" /> */}
            {/* <img src="leetcode (2).svg" alt="" className="logos landc" /> */}
            {/* <img src="code-forces (3).svg" alt="" className="logos landc" /> */}
          {/* </div> */}
        </div>
      </div>

    </>
  )
}

export default Navbar
