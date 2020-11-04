import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import AnimeCard from '../components/AnimeCard'
import './Discover.css'

const Discover = () => {
    const [topList, setTopList] = useState([])
    const [todayList, setTodayList] = useState([])
    const [comingList, setComingList] = useState([])

    useEffect(() => {
        Axios.get('https://api.jikan.moe/v3/top/anime/1/airing')
        .then(res => {
            console.log(res.data.top);
            setTopList(res.data.top)
        })
        .catch(err => {
            console.log(err);
            setTopList([])
        })
    }, [])

    useEffect(() => {
        Axios.get('https://api.jikan.moe/v3/schedule')
        .then(res => {
            console.log(res.data.tuesday);
            setTodayList(res.data.tuesday)
        })
        .catch(err => {
            console.log(err);
            setTodayList([])
        })
    }, [])

    useEffect(() => {
        Axios.get('https://api.jikan.moe/v3/season/later')
        .then(res => {
            console.log(res.data.anime);
            setComingList(res.data.anime)
        })
        .catch(err => {
            console.log(err);
            setComingList([])
        })
    }, [])

    return (
        <div className="discover">
            <div className="category mb-3">
               <div className="discover-title d-flex my-2 align-items-center">
                    <i className="fas fa-chart-line pr-2"></i>
                    <h2>What's HOT!</h2>
               </div>
               <div className="result-wrapper d-flex flex-wrap justify-content-center align-items-center animate-popup">
                    {
                        topList.length > 0 &&
                        topList.map(topAnime =>  <AnimeCard key={topAnime.mal_id} anime={topAnime}/>)
                    }
               </div>
            </div>
            <div className="category mb-3">
                <div className="discover-title d-flex p-2 my-2 align-items-center">
                    <i className="far fa-calendar-alt pr-2"></i>
                    <h2>What's airing today!</h2>
                </div>
                <div className="result-wrapper d-flex flex-wrap justify-content-center align-items-center animate-popup">
                    {
                        todayList.length > 0 &&
                        todayList.map(todayAnime => <AnimeCard key={todayAnime.mal_id} anime={todayAnime}/>)
                    }
                </div>
            </div>
            <div className="category mb-3">
                <div className="discover-title d-flex p-2 my-2 align-items-center">
                    <i className="far fa-clock pr-2"></i>
                    <h2>Coming Soon!</h2>
                </div>
                <div className="result-wrapper d-flex flex-wrap justify-content-center align-items-center animate-popup">
                    {
                        comingList.length > 0 && 
                        comingList.map(comingAnime => <AnimeCard key={comingAnime.mal_id} anime={comingAnime}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Discover
