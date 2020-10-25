
import React from 'react'
import './MainNav.css'

const MainNav = () => {
  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-4 pt-2" >
      <div className="d-flex align-items-center">
        <h4 className="mx-3">ANIFLIX</h4>
        <div className="vl m-1"></div>
        <h6 className="mx-3">Watch anime online for free.</h6>
      </div>
      <div className="d-flex">
        <button className="btn b-1 rounded mr-3"><i class="fab fa-windows"></i>&nbsp;&nbsp;Genres</button>
        <button className="btn b-2 rounded mr-3"><i class="far fa-eye"></i>&nbsp;&nbsp;Discover</button>
      </div>
    </nav>
  )
}

export default MainNav
