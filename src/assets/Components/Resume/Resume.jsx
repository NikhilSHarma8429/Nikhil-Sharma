import React from 'react'
import ResumeCSS from './Resume.module.css'

function Resume() {
  return (
    <>
      <div className="content-container">
        {/* <h1>ERROR 404 <br /> NOT FOUND</h1> */}
        <div className="header-container" id={ResumeCSS.headerContainer}>
        <iframe src="https://drive.google.com/file/d/1FqBPHABjh1xD6eAsw8hIJ3ksjmP5j3mv/preview?usp=sharing" className={ResumeCSS.resume}></iframe>
        </div>
      </div>
    </>
  )
}

export default Resume
