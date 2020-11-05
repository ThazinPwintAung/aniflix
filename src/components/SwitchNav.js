import React from 'react'
import {Link} from 'react-router-dom'
import './SwitchNav.css'

const SwitchNav = () => {
    return (
        <nav className="navbar d-flex justify-content-between align-items-center px-4 pt-2" >
            <div className="d-flex align-items-center">
                <h4 className="mx-3">ANIFLIX</h4>
            </div>
            <div>
                <Link to="/"><button className="btn rounded mr-3"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Return</button></Link>
            </div>
      </nav>
    )
}

export default SwitchNav
