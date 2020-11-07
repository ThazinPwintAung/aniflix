import React, {useContext} from 'react'
import Genres from '../components/Genres'
import Loading from '../components/Loading'
import SwitchNav from '../components/SwitchNav'
import Trailers from '../components/Trailers'
import {SearchContext} from '../context/search'
import './SingleView.css'

const SingleView = () => {
    const search = useContext(SearchContext)
    const {title, title_english, title_japanese, aired, episodes, genres, image_url, rating, synopsis, duration, trailer_url} = search.singleData

    console.log(search.singleData);

    return (
        <div>
            <SwitchNav />
                <div className="animeDetailsPage mx-4 px-5 animate-popup">
                <div className="details-wrapper">
                    <div className="detail-poster">
                        <img className="animate-fadein" src={image_url} alt={title_english}/>
                    </div>
                    <div className="detail-title">
                        <div id="detail-title">
                            <h1 className="title">{title_english}</h1>
                            <small>{title}</small> <br></br>
                            <small>{title_japanese}</small>
                            { rating ? <div> Rating : {rating} </div> : null }
                            { aired ? <div> Aired : {aired.string} </div> : null}
                            { episodes ? <div> Episodes : {episodes} </div> : null }
                            { duration ? <div> Duration : {duration} </div> : null}
                            { genres ? <Genres></Genres> : null}
                            {
                                synopsis ? 
                                <div className="overview">
                                    <h3>Synopsis</h3>
                                    <hr></hr>
                                    <p>{synopsis}</p>
                                </div> : null
                            }
                        </div>
                    </div>
                </div>
                {trailer_url ? <Trailers /> : null}
            </div>
        </div>
    )
}

export default SingleView
