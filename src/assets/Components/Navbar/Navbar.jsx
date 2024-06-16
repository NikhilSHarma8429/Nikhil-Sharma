import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';

function Navbar() {
  const sidebarState = useContext(SidebarContext)
  const navbarclickHandler = () => {
    if(sidebarState.className == 'sidebar-container cross'){
      sidebarState.setclassName('sidebar-container')
    }
    else if(Object.keys(sidebarState.style).length === 0 || sidebarState.style.animationName === 'L_to_R'){
      console.log('closing animation');
      if(window.innerWidth < 630)
        sidebarState.setstyle({animationName: 'R_to_L', animationDuration: '2s', bottom:'-4.5rem'})
      else
        sidebarState.setstyle({animationName: 'R_to_L', animationDuration: '2s', left:'-7rem'})
      // sidebarState.setclassName('sidebar-container cross')
    }
    else{
      console.log('opening animation');
      sidebarState.setstyle({animationName: 'L_to_R', animationDuration: '2s'})
      // sidebarState.setclassName('sidebar-container')
    }
  }

  return (
    <>
        <div className="navbar">
        <div className="left-navbar">
          <i className='fa-solid fa-bars fa-lg R_to_L zoom' onClick={() => {navbarclickHandler()}}></i>
        </div>
        <div className="center-navbar">
          {/* <div className="logo-box"> */}
            <a href="https://github.com/NikhilSHarma8429" target="_blank">
              <i className="fa-brands fa-github logos zoom"></i>
            </a>
            <a href="https://www.linkedin.com/in/nikhil-sharma-4a599221b/" target="_blank">
             <i className="fa-brands fa-linkedin-in logos zoom"></i>
            </a>
            <a href="mailto:sharma842nikhil@gmail.com" target="_blank">
             <i className="cib-gmail logos zoom"></i>
            </a>
            <a href="https://leetcode.com/u/sharma842nikhil/" target="_blank">
              <i className="cib-leetcode logos zoom"></i>
            </a>
            <a href="https://codeforces.com/profile/Nikhil84" target="_blank">
              <i className="fa-solid fa-chart-simple logos zoom"></i>
            </a>
            {/* <span className="material-symbols-outlined logos test">
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
