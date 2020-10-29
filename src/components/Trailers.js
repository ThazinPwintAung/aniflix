import React, {useContext} from 'react'
import {SearchContext} from '../context/search'
import './Trailers.css'

const Trailers = () => {
    const search = useContext(SearchContext)
    const {trailer_url} = search.singleData

    return (
        <div className="trailers">
            <h3 className="text-center">Trailer</h3>
            <hr/>
            <div className="trailer-wrapper">
                <div className="trailer-col">
                   <div className="trailer-container">
                        <iframe 
                        title="trailer-video"
                        src={trailer_url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                   />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Trailers
