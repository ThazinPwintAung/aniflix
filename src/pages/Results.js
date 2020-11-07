import React, {useEffect, useState, useContext} from 'react'
import AnimeList from '../components/AnimeList';
import Loading from '../components/Loading';
import SwitchNav from '../components/SwitchNav';
import {SearchContext} from '../context/search'

const Results = ({isLoading}) => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true)
    
    useEffect(() => {
        if (search.animeData === undefined){
            try {
                setDataExists(true)
            }catch (error) {
                console.log(error)
                setDataExists(false)
            }
        }
        console.log(search.animeData)
    }, [search]);

    return (
        <div>
            <SwitchNav />
            { isLoading ? <Loading/> :
                <div className="m-4 px-4">
                    {(dataExists && <AnimeList data={search.animeData}/>) || "Data doesn't exists"} 
                </div>
            }
        </div>
    )
}

export default Results
