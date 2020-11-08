
import React from 'react'
import {Link} from 'react-router-dom'
import Typed from 'react-typed'
import './MainNav.css'

const MainNav = () => {
  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-4 pt-2" >
      <div className="d-flex align-items-center">
        <h4 className="mx-3">ANIFLIX</h4>
        <div className="vl m-1"></div>
        <h6 className="mx-3">
          <Typed  strings={['A guide to find your favourite anime']} typeSpeed={50}/>
        </h6>
      </div>
      <div>
        <Link to="/discover"><button className="btn b-2 rounded mr-3"><i className="far fa-eye"></i>&nbsp;&nbsp;Discover</button></Link>
      </div>
    </nav>
  )
}

export default MainNav
