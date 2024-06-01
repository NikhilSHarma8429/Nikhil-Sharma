import React from 'react'
import ErrorCSS from './Error.module.css'

function Error() {
  return (
    <>
      <div className="content-container">
        {/* <h1>ERROR 404 <br /> NOT FOUND</h1> */}
        <div className="header-container" id={ErrorCSS.headerContainer}>
          <div className={ErrorCSS.hcHeading}>
            <h1>ERROR <br /> 404 <br />PAGE NOT FOUND</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error
