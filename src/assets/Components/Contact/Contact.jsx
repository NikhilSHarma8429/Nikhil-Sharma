import React from 'react'
import { NavLink } from 'react-router-dom'
import ResumeCSS from './Contact.module.css'

function Contact() {
  return (
    <>
      <div className="content-container">
          <div className="header-container" id={ResumeCSS.headerContainer} style={{marginBottom: '2rem'}}>
            <div className="header-heading" id={ResumeCSS.headerHeading}>
              <div className="header-title" id={ResumeCSS.headerTitle}>
                <h1>Get In Touch</h1>
              </div>
            </div>
            <div className="header-paragraph" id={ResumeCSS.headerParagraph}>
              <div className="paragraph" id={ResumeCSS.paragraph}>
                <p>
                Feel free to reach out to discuss potential opportunities, collaborations, or any questions you may have. I'm looking forward to connecting and exploring how we can work together.
                </p>
              </div>
              <div className={ResumeCSS.contactFormContainer}>
                <div className={ResumeCSS.contactForm}>
                  <div className={ResumeCSS.contactFormTitle}>
                    <h3>Contact Form</h3>
                  </div>
                  <div className={ResumeCSS.contactFormName}>
                    <div className={ResumeCSS.contactName}>
                      <input type="text" style={{color: 'white', padding:'0.2rem', textAlign:'center', fontSize: '1rem'}} placeholder='Name'/>
                    </div>
                    <div className={ResumeCSS.contactEmail}>
                      <input type="text" style={{color: 'white', padding:'0.2rem', textAlign:'center', fontSize: '1rem'}} placeholder='Email'/>
                    </div>
                  </div>
                  <div className={ResumeCSS.contactFormBody}>
                      <textarea name="" id="" style={{color: 'white', padding:'0.2rem', textAlign:'center', fontSize: '1rem'}} placeholder='Enter Your Message'></textarea>
                  </div>
                  <div className={ResumeCSS.contactFormButton}>
                    <div className={ResumeCSS.contactButton}>
                      <h5>Submit</h5>
                    </div>
                  </div>

                </div>
              </div>
              
            </div>
          </div>
      </div>
    </>
  )
}

export default Contact
