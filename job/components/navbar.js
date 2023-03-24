import { positions } from '@mui/system'
import React from 'react'
import styles from './/layout.module.css'
function Navbar() {
  return (
    <nav style={{position:'fixed',width:'100vw'}} className="navbar navbar-expand-lg navbar-light" >
        <a className="navbar-brand fs-1" href="/"><img src="/images/" alt="" /></a>
        <a href="/"><img src="sih/images/logo_new.png"alt="" /></a>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a href="/"><img className={styles.navImg} src="/images/logo_new.png" alt="" /></a>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item active">
                  <a className="nav-link fs-6 " href="/">Home <span className="sr-only" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-6" href="/jobs2">Jobs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-6" href="/about">About</a >
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link fs-6" href="/new">Admin</a>
                </li> */}
                
                
              </ul>
            </div>
          </ul></div></nav>
   
  )
}

export default Navbar