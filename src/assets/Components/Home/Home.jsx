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
                <NavLink to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="button">
                  <h5 className="button-text">Get in Touch <i class="fa-solid fa-arrow-right"></i> </h5> 
                </div>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="header-container featured-projects">
            <div className="project-header-container">
              <div className="p-project-title">
                <h1>
                  Featured Projects
                </h1>
              </div>
              <div className="paragraph">
                <p>
                Brief intro goes here. My main experience lies in building lorem ipsum dolor sit amet, consectetur adipiscing elit. I'm currently working on lacinia tristique.
                </p>
              </div>
            </div>
            <div className="project-body-container">
              <div className="p-container">
                <div className="p-card">
                  <div className="p-image-container">
                    <img src="25516.jpg" alt="" className="p-image" />
                  </div>
                  <div className="p-title">
                    <h6 className="p-name">Social Media Comment Sentiment Analyzer</h6>
                  </div>
                  <div className="p-disc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ea earum maxime veniam impedit ipsa distinctio dolor cumque exercitationem quaerat.
                    </p>
                  </div>
                </div>

                <div className="p-card">
                  <div className="p-image-container">
                    <img src="Screenshot (730).png" alt="" className="p-image" />
                  </div>
                  <div className="p-title">
                    <h6 className="p-name">YouTube And Spotify Clone with YouTube videos downloader</h6>
                  </div>
                  <div className="p-disc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex a obcaecati blanditiis. Libero accusamus temporibus magni rerum fugiat illo!
                    </p>
                  </div>
                </div>

                <div className="p-card">
                  <div className="p-image-container">
                    <img src="Screenshot (729).png" alt="" className="p-image" />
                  </div>
                  <div className="p-title">
                    <h6 className="p-name" id="fitsports">FitSportChamp Website</h6>
                  </div>
                  <div className="p-disc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eius eligendi dicta, ipsum cumque nulla minus earum cupiditate maiores maxime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="paragraph-button-container">
              <NavLink to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="button">
                    <h5 className="button-text">More Projects <i class="fa-solid fa-arrow-right"></i> </h5> 
                </div>
              </NavLink>
            </div>
          </div>

          <div className="header-container skills-container">
            <div className="s-header-container">
              <div className="p-project-title">
                <h1>
                  Skills
                </h1>
              </div>
              <div className="paragraph">
                <p>
                  Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can replace or add more tech icons below to reflect your skillset.
                </p>
              </div>
            </div>
            <div className="s-body-container">
              <div className="s-body-logos">
                <div className="s-logos-first">
                    <div className="s-logos-container">
                      <img src="c-1.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="c.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="python-5.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="react-2.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="mongodb-icon-2.svg" className="s-logos" alt="" />
                    </div>
                </div>
                <div className="s-logos-second">
                    <div className="s-logos-container">
                      <img src="logo-javascript.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="github-icon-1.svg" className="s-logos" alt="" />
                    </div>
                    <div className="s-logos-container">
                      <img src="CSS3_logo_and_wordmark.svg" className="s-logos" alt="" />
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
            <div className="paragraph-button-container">
              <NavLink to="/resume" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="button">
                  <h5 className="button-text">View Resume <i class="fa-solid fa-arrow-right"></i> </h5> 
                </div>
              </NavLink>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home
