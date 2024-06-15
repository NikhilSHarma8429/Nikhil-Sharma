import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCSS from './Projects.module.css'

function Projects() {
  return (
    <>
        <div className="content-container">
          <div className="header-container">
            <div className="header-heading">
              <div className="header-title">
                <h1>
                  Featured Projects
                </h1>
              </div>
              <div className="paragraph">
                <p>
                Projects are crucial in a portfolio as they demonstrate practical application of skills and problem-solving abilities. They show clear evidence of your skills, highlighting your ability to achieve real-world results and find innovative solutions.
                </p>
              </div>
            </div>
            <div className="paragraph-button-container">
              <NavLink to="/resume" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="button">
                    <h5 className="button-text">View Resume <i className="fa-solid fa-arrow-right"></i> </h5> 
                </div>
              </NavLink>
            </div>
          </div>

          <div className="header-container" style={{marginTop: '1rem', marginBottom: '2rem'}}>

            <div className={ProjectCSS.projectcard} style={{paddingTop: '3rem'}}>
              <div className={ProjectCSS.cardimage}>
                <img src="25516.jpg" alt="" />
              </div>
              <div className={ProjectCSS.cardcontent}>
                <div className={ProjectCSS.cardtitle}>
                  <h2>Social Media Comment Sentiment Analyzer</h2>
                </div>
                <div className={`paragraph ${ProjectCSS.cardparagraph}`}>
                  <p>
                  Analyze social media comments into different categories and provide ratio of them. Through Machine Learning and Artificial Intelligence provide suggestions for improving the content.
                  </p>
                </div>
                <div className={ProjectCSS.cardsubheading}>
                  <h5>Tech Stack:</h5>
                </div>
                <div className={ProjectCSS.cardlogocontainer}>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="python-5.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="react-2.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="Node.js_logo.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="Google_Colaboratory_SVG_Logo.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="mongodb-icon-2.svg" alt="" />
                  </div>
                </div>
                <div className={ProjectCSS.cardsubheading} style={{paddingTop: '0.4rem', color: '#71abd4'}}>
                    <NavLink to="/projects/commentvibe" style={{textDecoration:'none', color:'inherit'}}>
                      <h5>View Project <i className="fa-solid fa-arrow-right"></i></h5>
                    </NavLink>
                </div>
              </div>
            </div>

            <div className={ProjectCSS.projectcard}>
              <div className={ProjectCSS.cardimage}>
                <img src="25516.jpg" alt="" />
              </div>
              <div className={ProjectCSS.cardcontent}>
                <div className={ProjectCSS.cardtitle}>
                  <h2>Ecommerce Clone </h2>
                </div>
                <div className={`paragraph ${ProjectCSS.cardparagraph}`}>
                  <p>
                  This fully functional eCommerce clone project features a robust backend and integrated database, supporting user authentication, product management, shopping cart, and order processing.
                  </p>
                </div>
                <div className={ProjectCSS.cardsubheading}>
                  <h5>Tech Stack:</h5>
                </div>
                <div className={ProjectCSS.cardlogocontainer}>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="react-2.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="Node.js_logo.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="mongodb-icon-2.svg" alt="" />
                  </div>
                </div>
                <div className={ProjectCSS.cardsubheading} style={{paddingTop: '0.4rem', color: '#71abd4'}}>
                    <NavLink to="/projects/ecommerce-clone" style={{textDecoration:'none', color:'inherit'}}>
                      <h5>View Project <i className="fa-solid fa-arrow-right"></i></h5>
                    </NavLink>
                </div>
              </div>
            </div>

            <div className={ProjectCSS.projectcard}>
              <div className={ProjectCSS.cardimage}>
                <img src="Screenshot (729).png" alt="" />
              </div>
              <div className={ProjectCSS.cardcontent}>
                <div className={ProjectCSS.cardtitle}>
                  <h2>FitSportChamp Website</h2>
                </div>
                <div className={`paragraph ${ProjectCSS.cardparagraph}`}>
                  <p>
                  Developed a project for the GFG Solving for India Hackathon 2023, offering diverse reading materials on exercises and sports to enhance user’s physical fitness and diet.
                  </p>
                </div>
                <div className={ProjectCSS.cardsubheading}>
                  <h5>Tech Stack:</h5>
                </div>
                <div className={ProjectCSS.cardlogocontainer}>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="w3_html5-icon.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="w3_css-icon.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="logo-javascript.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="wordpress-icon.svg" alt="" />
                  </div>
                </div>
                <div className={ProjectCSS.cardsubheading} style={{paddingTop: '0.4rem', color: '#71abd4'}}>
                    <NavLink to="/projects/fitsportchamp" style={{textDecoration:'none', color:'inherit'}}>
                      <h5>View Project <i className="fa-solid fa-arrow-right"></i></h5>
                    </NavLink>
                </div>
              </div>
            </div>

            <div className={ProjectCSS.projectcard}>
              <div className={ProjectCSS.cardimage}>
                <img src="Screenshot (730).png" alt="" />
              </div>
              <div className={ProjectCSS.cardcontent}>
                <div className={ProjectCSS.cardtitle}>
                  <h2>YouTube And Spotify Clone with YouTube videos downloader</h2>
                </div>
                <div className={`paragraph ${ProjectCSS.cardparagraph}`}>
                  <p>
                  Designed to replicate YouTube and Spotify functionalities. Enabled users to watch and download YouTube videos, and listen to music seamlessly
                  </p>
                </div>
                <div className={ProjectCSS.cardsubheading}>
                  <h5>Tech Stack:</h5>
                </div>
                <div className={ProjectCSS.cardlogocontainer}>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="w3_html5-icon.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="w3_css-icon.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="logo-javascript.svg" alt="" />
                  </div>
                  <div className={ProjectCSS.logocontainer}>
                    <img src="128px-Bootstrap_logo.svg.png" alt="" />
                  </div>
                </div>
                  <div className={ProjectCSS.cardsubheading} style={{paddingTop: '0.4rem', color: '#71abd4'}}>
                    <NavLink to="/projects/all-in-one" style={{textDecoration:'none', color:'inherit'}}>
                      <h5>View Project <i className="fa-solid fa-arrow-right"></i></h5>
                    </NavLink>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects
