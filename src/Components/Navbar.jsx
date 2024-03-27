import React from 'react'
// import {Link} form "react-router-dom"

function Navbar() {
  return (
    <div className="gutter">

    <div className="nav-bar-container">
        <div className="nav-bar-logo-container">
            NomadNest
        </div>
        <div className="nav-bar-links-container">
            <div className="nav-bar-link">
                <a className="nav-bar-link-login" href="">Log in</a>
            </div>
            <div className="nav-bar-link">
                <a className="nav-bar-link-start" href=''>Start</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar