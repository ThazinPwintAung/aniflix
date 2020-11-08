import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/search'
import {useHistory} from 'react-router-dom'
import './SwitchNav.css'

const SwitchNav = () => {
    const [input, setInput] = useState('')
    const search = useContext(SearchContext)
    const history = useHistory()

    const handleSearch = (event) => {
        event.preventDefault()
        search.search(input);
        history.push('/results');
    }
    return (
        <nav className="navbar d-flex justify-content-between align-items-center px-4 pt-2" >
            <div className="d-flex align-items-center">
                <h4 className="mx-3">ANIFLIX</h4>
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
