import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './SwitchNav.css'

const SwitchNav = () => {
    const [input, setInput] = useState('')
    const history = useHistory()

    const handleSearch = (event) => {
        event.preventDefault();
        history.push('/results/searchByTerms/' + input);
    }

    const goHome = () => {
        console.log("I want to go home");
        history.push('/');
    }

    return (
        <nav className="navbar d-flex justify-content-between align-items-center px-4 pt-2" >
            <div className="d-flex align-items-center">
                <h4 className="mx-3" onClick={goHome}>ANIFLIX</h4>
                <form onSubmit={handleSearch} className="d-flex align-items-center">
                    <input type="text" placeholder="Search" value={input} onChange={(event) => setInput(event.target.value)}/>
                </form>
            </div>
            <div>
                <button className="btn return rounded mr-3" onClick={() => history.goBack()}><i className="fas fa-arrow-left"></i>&nbsp;&nbsp;Return</button>
            </div>
      </nav>
    )
}

export default SwitchNav
