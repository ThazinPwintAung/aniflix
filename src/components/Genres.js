import React, {useContext} from 'react'
import {SearchContext} from '../context/search'
import './Genres.css'

const Genres = () => {
    const search = useContext(SearchContext)
    const {genres} = search.singleData

    return (
        <div>
            {
                genres.map(g => <div className="genres" key={g.mal_id}>{g.name}</div>)
            }
        </div>
    )
}

export default Genres
