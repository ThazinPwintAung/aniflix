import React from 'react'
import AnimeCard from './AnimeCard'

const AnimeList = (props) => {
    return (
        <div>
           {
               props.data.map(anime => (
                   <AnimeCard anime={anime} />
               ))
           }
        </div>
    )
}

export default AnimeList
