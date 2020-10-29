import React, {useState,useEffect, useContext} from 'react'
import Genres from '../components/Genres'
import Trailers from '../components/Trailers'
import {SearchContext} from '../context/search'
import './SingleView.css'

const SingleView = () => {
    const search = useContext(SearchContext)
    const {title, title_japanese, url, aired, episodes, genres, image_url, rating, synopsis, duration, trailer_url} = search.singleData

    console.log(search.singleData);

    return (
        <div className="animeDetailsPage mx-4 px-5">
           <>
                <div className="details-wrapper">
                    <div className="detail-poster">
                        <img className="animate-fadein" src={image_url} alt={title}/>
                    </div>
                    <div className="detail-title">
                        <div id="detail-title">
                            <h1 className="title">{title}</h1>
                            <small>{title_japanese}</small>
                            { rating ? <div> Rating : {rating} </div> : null }
                            { aired ? <div> Aired : {aired.string} </div> : null}
                            { episodes ? <div> Episodes : {episodes} </div> : null }
                            { duration ? <div> Duration : {duration} </div> : null}
                            { genres ? <Genres></Genres> : null}
                            <div className="overview">
                                <h3>Synopsis</h3>
                                <hr></hr>
                                <p>{synopsis}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {trailer_url ? <Trailers /> : null}
           </>
        </div>
    )
}

export default SingleView
