import React from 'react'
import CSS from './../Commentvibe/Commentvibe.module.css'

function Allinone() {
  return (
  <div>
    <div className="content-container" style={{marginBottom: '2rem'}}>
      <div className="header-container">
        <div className="header-heading">
          <div className="header-title">
            <h1>
              Allinone: YouTube And Spotify Clone with YouTube videos downloader
            </h1>
          </div>
        </div>
        <div className={CSS.contentContainer}>
          <div className={CSS.imageContainer}>
            <img src="./../Screenshot (730).png" alt="" />
          </div>
          <div className={CSS.linkWrapper}>
            <div className={CSS.linkContainer}>
              <a href="https://github.com/NikhilSHarma8429/Youtube-And-Spotify-Clone" target="_blank" className={CSS.lLogo}>
                <i class="fa-brands fa-github-alt fa-xl"></i>
              </a>
              <div className={CSS.linkTitle}>
                <a href="https://github.com/NikhilSHarma8429/Youtube-And-Spotify-Clone" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
                  <h3>Github</h3>
                </a>
              </div>
            </div>
            <div className={CSS.linkContainer}>
              <a href="https://all-in-one-vercel.vercel.app/" target="_blank" className={CSS.lLogo}>
                <i class="fa-solid fa-link fa-xl link-logo"></i>
              </a>
              <div className={CSS.linkTitle}>
                <a href="https://all-in-one-vercel.vercel.app/" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
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

export default Allinone
