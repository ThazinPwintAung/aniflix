import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Axios from 'axios'
import Home from './pages/Home'
import Results from './pages/Results'
import SingleView from './pages/SingleView'
import {SearchContext} from './context/search'
import Discover from './pages/Discover';

function App() {

  const [animeData, setAnimeData] = useState([])
  const [singleData, setSingleData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const setData = (data) => {
    setAnimeData(data)
  }

  const setSingle = (data) => {
    setSingleData(data)
  }

  const search = (searchTerm) => {
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

  return (
    <SearchContext.Provider value={{search, searchByGenre, animeData, setData, singleData, setSingle, isLoading}}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/results/:type/:searchTermOrGenreId" component={Results} exact></Route>
          <Route path="/single-view" component={SingleView} exact></Route>
          <Route path="/discover" exact component={Discover}></Route>
        </Switch>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
