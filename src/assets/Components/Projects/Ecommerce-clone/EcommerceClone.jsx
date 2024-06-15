import React from 'react'
import CSS from './../Commentvibe/Commentvibe.module.css'

function EcommerceClone() {
  return (
    <div>
      <div className="content-container" style={{marginBottom: '2rem'}}>
        <div className="header-container">
          <div className="header-heading">
            <div className="header-title">
              <h1>
                Ecommerce Clone
              </h1>
            </div>
          </div>
          <div className={CSS.contentContainer}>
            <div className={CSS.imageContainer}>
              <img src="./../25516.jpg" alt="" />
            </div>
            <div className={CSS.linkWrapper}>
              <div className={CSS.linkContainer}>
                <div className={CSS.linkLogo}>
                  <img src="./../github-icon-1.svg" alt="" />
                </div>
                <div className={CSS.linkTitle}>
                  <h5>Github</h5>
                </div>
              </div>
              <div className={CSS.linkContainer}>
                <div className={CSS.linkLogo}>
                  <img src="./../github-icon-1.svg" alt="" />
                </div>
                <div className={CSS.linkTitle}>
                  <h5>Live Link</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcommerceClone
