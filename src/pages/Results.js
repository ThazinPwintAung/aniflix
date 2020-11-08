import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import AnimeList from '../components/AnimeList';
import Loading from '../components/Loading';
import SwitchNav from '../components/SwitchNav';

const Results = ({match}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const searchByTerms = (searchTerm) => {
        setIsLoading(true)
        Axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}`)
        .then(response => {
          setData(response.data.results);
          setIsLoading(false);
        }).catch(err => {
          setData([]);
          setIsLoading(false);
        });
      }
    
    const searchByGenre = (genreId) => {
        setIsLoading(true);
        Axios.get(`https://api.jikan.moe/v3/search/anime?genre=${genreId}`)
        .then(response => {
          setData(response.data.results);
          setIsLoading(false);
        }).catch(err => {
          setData([]);
          setIsLoading(false);
        });
      }

    useEffect(() => {
        if(match.params.type === "genre") {
            searchByGenre(match.params.searchTermOrGenreId);
        } else {
            searchByTerms(match.params.searchTermOrGenreId);
        }
    }, [match.params.type, match.params.searchTermOrGenreId]);

    return (
        <div>
            <SwitchNav />
            { isLoading ? <Loading/> :
                <div className="m-4 px-4">
                    {data && data.length > 0 ? <AnimeList data={data}/>: "Data doesn't exists"} 
                </div>
            }
        </div>
    )
}

export default Results
