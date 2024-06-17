import React from 'react'
import CSS from './Commentvibe.module.css'

function Commentvibe() {
  return (
  <div>
    <div className="content-container" style={{marginBottom: '2rem'}}>
      <div className="header-container">
        <div className="header-heading">
          <div className="header-title">
            <h1>
              Commentvibe: Social Media Comment Sentiment Analyzer
            </h1>
          </div>
        </div>
        <div className={CSS.contentContainer}>
          <div className={CSS.imageContainer}>
            <img src="./../25516.jpg" alt="" />
          </div>
          <div className={CSS.linkWrapper}>
            <div className={CSS.linkContainer}>
              <a href="http://www.google.com" target="_blank" className={CSS.lLogo}>
                <i class="fa-brands fa-github-alt fa-xl"></i>
              </a>
              <div className={CSS.linkTitle}>
                <a href="http://www.google.com" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
                  <h3>Github</h3>
                </a>
              </div>
            </div>
            <div className={CSS.linkContainer}>
              <a href="http://www.google.com" target="_blank" className={CSS.lLogo}>
                <i class="fa-solid fa-link fa-xl link-logo"></i>
              </a>
              <div className={CSS.linkTitle}>
                <a href="http://www.google.com" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
                  <h3>Live Link</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Commentvibe
