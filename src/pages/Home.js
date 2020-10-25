import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { SearchContext } from '../context/search'
import './SearchBar.css'

const Home = () => {
    const history = useHistory();
    const search = useContext(SearchContext)
    const [input, setInput] = useState('')

    const handleSearch = (event) => {
        event.preventDefault()
        search.search(input).then(data => {
            console.log(data);
            search.setData(data.results);
            localStorage.setItem('myData', JSON.stringify(data.results));
            history.push('/results');
        })
    }

    return (
        <div className="home d-flex flex-column-reverse justify-content-center align-items-center p-5">
            <form className="box mt-4">
                <input type="text" placeholder="Search for your favourite anime..." value={input} onChange={(event) => setInput(event.target.value)} />
                <button type="submit" onClick={handleSearch}><i className="fas fa-search"></i></button>
            </form>
            <div className="image-container">
                <img 
                alt="totoro" 
                src={`${process.env.PUBLIC_URL}/one-piece-luffy.png`}></img>
            </div>
        </div>
    )
}

export default Home
