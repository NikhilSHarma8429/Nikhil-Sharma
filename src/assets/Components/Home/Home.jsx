import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="content-container">
          <div className="header-container">
            <div className="header-heading">
              <div className="header-title">
                <h1>Nikhil Sharma</h1>
              </div>
            </div>
            <div className="header-paragraph">
              <div className="paragraph">
                <p>
                  3rd-year B.Tech student with a strongpassion for coding and a solid grasp ofdata structures and algorithms. I'mcommitted to learning, staying updated,and pursuing internships to contribute tosoftware development.
                </p>
              </div>
              <div className="paragraph-button-container">
                <div className="button">
                  <NavLink to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                  <h5 className="button-text">Get in Touch <i class="fa-solid fa-arrow-right"></i> </h5> 
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="featured-projects">
            <div className="project-header-container">
              <div className="p-header-title">
                <h1>
                  Featured Projects
                </h1>
              </div>
              <div className="p-header-paragraph">
                <p>
                Brief intro goes here. My main experience lies in building lorem ipsum dolor sit amet, consectetur adipiscing elit. I'm currently working on lacinia tristique.
                </p>
              </div>
            </div>
            <div className="project-body-container">
              <div className="p-container">
                <div className="p-card">
                  <div className="p-image-container">
                    <img src="public\25516.jpg" alt="" className="p-image" />
                  </div>
                  <div className="p-title">
                    <h6 className="p-name">Social Media Comment Sentiment Analyzer</h6>
                  </div>
                  <div className="p-disc">

                  </div>
                </div>

                <div className="p-card">
                  <div className="p-image-container">
                    <img src="public\Screenshot (730).png" alt="" className="p-image" />
                  </div>
                  <div className="p-title">
                    <h6 className="p-name">YouTube And Spotify Clone with YouTube videos downloader</h6>
                  </div>
                  <div className="p-disc">

                  </div>
                </div>

                <div className="p-card">
                  <div className="p-image-container">
                    <img src="Screenshot (729).png" alt="" className="p-image" />
                  </div>
                  <div className="p-title">
                    <h6 className="p-name">FitSportChamp Website</h6>
                  </div>
                  <div className="p-disc">

                  </div>
                </div>
              </div>
            </div>
            <div className="project-footer-container">
              <div className="button">
                  <NavLink to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
                  <h5 className="button-text">More Projects <i class="fa-solid fa-arrow-right"></i> </h5> 
                  </NavLink>
              </div>
            </div>
          </div>

          <div className="skills-container">
            <div className="s-header-container">
              <div className="s-header-title">
                <h1>
                  Skills
                </h1>
              </div>
              <div className="s-header-paragraph">
                <p>
                  Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can replace or add more tech icons below to reflect your skillset.
                </p>
              </div>
            </div>
            <div className="s-body-container">
              <div className="s-body-logos">
                <div className="s-logos-first">
                    <div className="s-logos-container">
                      <img src="public\c-1.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="public\c.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="public\python-5.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="public\react-2.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="public\mongodb-icon-2.svg" className="s-logos" alt="" />
                    </div>
                </div>
                <div className="s-logos-second">
                    <div className="s-logos-container">
                      <img src="public\logo-javascript.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="public\github-icon-1.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="public\CSS3_logo_and_wordmark.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="mysql-official.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="Node.js_logo.svg" className="s-logos" alt="" />
                    </div>
                </div>
              </div>
            </div>
            <div className="s-footer-container">
              <div className="button">
                <NavLink to="/resume" style={{ textDecoration: "none", color: "inherit" }}>
                <h5 className="button-text">View Resume <i class="fa-solid fa-arrow-right"></i> </h5> 
                </NavLink>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home
