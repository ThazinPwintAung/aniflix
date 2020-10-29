import React from 'react'
import AnimeCard from './AnimeCard'

const AnimeList = (props) => {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center animate-popup">
           {
               props.data.map(anime => (
                   <AnimeCard key={anime.mal_id} anime={anime} />
               ))
           }
        </div>
    )
}

export default AnimeList
