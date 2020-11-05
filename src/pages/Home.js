import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import MainNav from '../components/MainNav'
import { SearchContext } from '../context/search'
import './Home.css'

const Home = () => {
    const history = useHistory();
    const search = useContext(SearchContext)
    const [input, setInput] = useState('')

    const genres = [
        { id: 1, name: 'Action'},
        { id: 2, name: 'Adventure'},
        { id: 3, name: 'Cars'},
        { id: 4, name: 'Comedy'},
        { id: 5, name: 'Dementia'},
        { id: 6, name: 'Demons'},
        { id: 7, name: 'Mystery'},
        { id: 8, name: 'Drama'},
        { id: 9, name: 'Ecchi'},
        { id: 10, name: 'Fantasy'},
        { id: 11, name: 'Game'},
        { id: 12, name: 'Hentai'},
        { id: 13, name: 'Historical'},
        { id: 14, name: 'Horror'},
        { id: 15, name: 'Kids'},
        { id: 16, name: 'Magic'},
        { id: 17, name: 'Martial Arts'},
        { id: 18, name: 'Mecha'},
        { id: 19, name: 'Music'},
        { id: 20, name: 'Parody'},
        { id: 21, name: 'Samurai'},
        { id: 22, name: 'Romance'},
        { id: 23, name: 'School'},
        { id: 24, name: 'Sci Fi'},
        { id: 25, name: 'Shoujo'},
        { id: 26, name: 'Shoujo Ai'},
        { id: 27, name: 'Shounen'},
        { id: 28, name: 'Shounen Ai'},
        { id: 29, name: 'Space'},
        { id: 30, name: 'Sports'},
        { id: 31, name: 'Super Power'},
        { id: 32, name: 'Vampire'},
        { id: 33, name: 'Yaoi'},
        { id: 34, name: 'Yuri'},
        { id: 35, name: 'Harem'},
        { id: 36, name: 'Slice of Life'},
        { id: 37, name: 'Supernatural'},
        { id: 38, name: 'Military'},
        { id: 39, name: 'Police'},
        { id: 40, name: 'Psychological'},
        { id: 41, name: 'Thriller'},
        { id: 42, name: 'Seinen'},
        { id: 43, name: 'Josei'},
    ]

    const handleSearch = (event) => {
        event.preventDefault()
        search.search(input).then(data => {
            search.setData(data.results);
            history.push('/results');
        })
    }

    return (
        <div>
            <MainNav />
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
        </div>
    )
}

export default Home
