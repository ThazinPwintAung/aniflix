import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import {SearchContext} from '../context/search'
import './AnimeCard.css'

const AnimeCard = (props) => {
    const title = props.anime.title
    const imageUrl = props.anime.image_url
    const synopsis = props.anime.synopsis

    const history = useHistory()
    const search = useContext(SearchContext)
    
    const onClickHandler = () => {
        fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}`)
        .then(res => res.json())
        .then(data => {
            search.setSingle(data);
            history.push('/single-view');
        })
    }

    return (
        <div className="card m-2 rounded" onClick={onClickHandler}>
            <img src={imageUrl} className="card-img-top" alt={title} 
            style={{maxHeight: 260, minHeight:260, overflow: "hidden"}}
            />
            <h5 className="title p-2" style={{fontSize: 14}}>{title}</h5>
            <div className="card-hover p-2 rounded">
                <h5>Overview : </h5>
                <p style={{fontSize: 13}}>{synopsis}</p>
            </div>
        </div>
    )
}

export default AnimeCard
