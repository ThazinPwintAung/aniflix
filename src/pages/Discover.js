import React, {useState, useEffect, useContext} from 'react'
import Axios from 'axios'
import AnimeCard from '../components/AnimeCard'
import './Discover.css'
import SwitchNav from '../components/SwitchNav'
import Loading from '../components/Loading'
import {SearchContext} from '../context/search'
import {useHistory} from 'react-router-dom'

const Discover = () => {
    const search = useContext(SearchContext);
    const history = useHistory();

    const [topListLoading, setTopListLoading] = useState(true)
    const [topList, setTopList] = useState([])
    const [todayListLoading, setTodayListLoading] = useState(true)
    const [todayList, setTodayList] = useState([])
    const [comingListLoading, setComingListLoading] = useState(true)
    const [comingList, setComingList] = useState([])

    useEffect(() => {
        setTopListLoading(true);
        Axios.get('https://api.jikan.moe/v3/top/anime/1/airing')
        .then(res => {
            console.log(res.data.top);
            setTopList(res.data.top);
            setTopListLoading(false);
        })
        .catch(err => {
            console.log(err);
            setTopList([]);
            setTopListLoading(false);
        })
    }, [])

    useEffect(() => {
        setTodayListLoading(true);
        Axios.get('https://api.jikan.moe/v3/schedule')
        .then(res => {
            console.log(res.data.tuesday);
            setTodayList(res.data.tuesday);
            setTodayListLoading(false);
        })
        .catch(err => {
            console.log(err);
            setTodayList([]);
            setTodayListLoading(false);
        })
    }, [])

    useEffect(() => {
        setComingListLoading(true);
        Axios.get('https://api.jikan.moe/v3/season/later')
        .then(res => {
            console.log(res.data.anime);
            setComingList(res.data.anime);
            setComingListLoading(false);
        })
        .catch(err => {
            console.log(err);
            setComingList([]);
            setComingListLoading(false);
        })
    }, [])

    const seeTopMore = () => {
        search.setData(topList);
        history.push('/results');
    }

    const seeTodayMore = () => {
        search.setData(todayList);
        history.push('/results');
    }

    const seeComingMore = () => {
        search.setData(comingList);
        history.push('/results');
    }

    return (
        <div className="discover">
        <SwitchNav />
            <div className="category mb-3">
               <div className="d-flex justify-content-between align-items-center" >
                   <div className="discover-title d-flex my-2 align-items-center">
                        <i className="fas fa-chart-line fa-2x pr-2"></i>
                        <h2>What's HOT!</h2>
                   </div>
                   <div onClick={seeTopMore}>
                        <h6>See More..</h6>
                   </div>
               </div>
               {
                   topListLoading ? <Loading/> :
                   <div className="result-wrapper d-flex flex-wrap justify-content-center align-items-center animate-popup">
                        {   
                            topList.length > 0 &&
                            topList.map(topAnime =>  <AnimeCard key={topAnime.mal_id} anime={topAnime}/>)
                        }
                    </div>
               }
            </div>
            <div className="category mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="discover-title d-flex p-2 my-2 align-items-center">
                        <i className="far fa-calendar-alt fa-2x pr-2"></i>
                        <h2>What's airing today!</h2>
                    </div>
                    <div onClick={seeTodayMore}>
                        <h6>See More..</h6>
                    </div>
                </div>
                {
                    todayListLoading ? <Loading/> :
                    <div className="result-wrapper d-flex flex-wrap justify-content-center align-items-center animate-popup">
                        {
                            todayList.length > 0 &&
                            todayList.map(todayAnime => <AnimeCard key={todayAnime.mal_id} anime={todayAnime}/>)
                        }
                    </div>
                }
            </div>
            <div className="category mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="discover-title d-flex p-2 my-2 align-items-center">
                        <i className="far fa-clock fa-2x pr-2"></i>
                        <h2>Coming Soon!</h2>
                    </div>
                    <div onClick={seeComingMore}>
                        <h6>See More..</h6>
                    </div>
                </div>
                {
                    comingListLoading ? <Loading/> :
                    <div className="result-wrapper d-flex flex-wrap justify-content-center align-items-center animate-popup">
                        {
                            comingList.length > 0 && 
                            comingList.map(comingAnime => <AnimeCard key={comingAnime.mal_id} anime={comingAnime}/>)
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Discover
