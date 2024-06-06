import React from 'react'
import { NavLink } from 'react-router-dom'

function Projects() {
  return (
    <>
        <div className="content-container">
          {/* <div className="header-container">
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
                  <h5 className="button-text">Get in Touch <i className="fa-solid fa-arrow-right"></i> </h5> 
                  </NavLink>
                </div>
              </div>
            </div>
          </div> */}

          <div className="header-container">
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
              <div className="button">
                  <NavLink to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
                  <h5 className="button-text">More Projects <i className="fa-solid fa-arrow-right"></i> </h5> 
                  </NavLink>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects
