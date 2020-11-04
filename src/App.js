import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Results from './pages/Results'
import SingleView from './pages/SingleView'
import {SearchContext} from './context/search'
import MainNav from './components/MainNav';
import Discover from './pages/Discover';

function App() {

  const [animeData, setAnimeData] = useState([])
  const [singleData, setSingleData] = useState({})

  const setData = (data) => {
    setAnimeData(data)
  }

  const setSingle = (data) => {
    setSingleData(data)
  }

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}`
    ).then(response => response.json())
  }

  return (
    <SearchContext.Provider value={{search, animeData, setData, singleData, setSingle}}>
      <Router>
      <MainNav />
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/results" exact><Results/></Route>
          <Route path="/single-view" exact><SingleView/></Route>
          <Route path="/discover" exact><Discover/></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
