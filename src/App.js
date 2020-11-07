import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Axios from 'axios'
import Home from './pages/Home'
import Results from './pages/Results'
import SingleView from './pages/SingleView'
import {SearchContext} from './context/search'
import Discover from './pages/Discover';

function App() {

  const [animeData, setAnimeData] = useState([])
  const [singleData, setSingleData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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
    })
  }

  const searchByGenre = (genreId) => {
    setIsLoading(true);
    Axios.get(`https://api.jikan.moe/v3/search/anime?genre=${genreId}`)
    .then(response => {
      setData(response.data.results);
      setIsLoading(false);
    })
  }

  return (
    <SearchContext.Provider value={{search, searchByGenre, animeData, setData, singleData, setSingle}}>
      <Router>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/results" exact><Results isLoading={isLoading}/></Route>
          <Route path="/single-view" exact><SingleView /></Route>
          <Route path="/discover" exact><Discover/></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
