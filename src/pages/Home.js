import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { SearchContext } from '../context/search'
import './Home.css'

const Home = () => {
    const history = useHistory();
    const search = useContext(SearchContext)
    const [input, setInput] = useState('')

    const handleSearch = (event) => {
        event.preventDefault()
        search.search(input).then(data => {
            search.setData(data.results);
            history.push('/results');
        })
    }

    return (
        <div className="home d-flex flex-column justify-content-center align-items-center p-5">
            <div className="image-container animate-popup-1">
                <img 
                alt="luffy" 
                src={`${process.env.PUBLIC_URL}/one-piece-luffy.png`}></img>
            </div>
            <form className="box mt-4 animate-popup-2">
                <input type="text" placeholder="Search for your favourite anime..." value={input} onChange={(event) => setInput(event.target.value)} />
                <button type="submit" onClick={handleSearch}><i className="fas fa-search"></i></button>
            </form>
        </div>
    )
}

export default Home
