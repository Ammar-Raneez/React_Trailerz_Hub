import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //an array of all netflix originals
            const request = await axios.get(requests.fetchNetflixOriginals);
            //selecting a random movie from the array of movies
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            return request;
        }
        fetchData();
    }, [])

    //stack overflow, truncate remaining characters passed length 150
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }   //if length > n, substring till n concatenating '...', else return same string

    return (
        //header with background image of shown movie //*'?' - similar to regex, if found, use it, if not dont, thereby preventing crashing*//
        <header className="banner" 
            style={{backgroundSize: "cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
            , backgroundPosition: "center"}}
        >
            <div className="banner__contents">
                {/*title, movies either have a title/ name/ original_name attribute, we use what can be found*/}
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

                {/*buttons (play and my list)*/}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                {/*description, overview prop that holds description*/}
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
