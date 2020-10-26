import React from 'react'
import {SearchContext} from '../context/search'

const AnimeCard = (props) => {
    const title = props.anime.title
    const imageUrl = props.anime.image_url
    const synopsis = props.anime.synopsis

    return (
        <div className="card" style={{width: "12rem", maxHeight: 360, minHeight: 360, border: "1px solid #fff", boxShadow: "5px 5px 6px #10252633"}} className="m-2 rounded">
            <img src={imageUrl} className="card-img-top" alt={title} 
            style={{maxHeight: 260, minHeight:260, overflow: "hidden"}}
            />
            <h5 className="title" style={{fontSize: 14}} className="p-2">{title}</h5>
        </div>
    )
}

export default AnimeCard
