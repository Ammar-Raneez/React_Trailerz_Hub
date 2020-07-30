import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const allMovies = [requests.fetchActionMovies, requests.fetchAdventureMovies, requests.fetchAnimatedMovies, 
                requests.fetchComedyMovies, requests.fetchDocumentaries, requests.fetchDramaMovies, requests.fetchFantasyMovies,
                requests.fetchHistoryMovies, requests.fetchHorrorMovies, requests.fetchMusicMovies, requests.fetchMysteryMovies,
                requests.fetchRomanceMovies, requests.fetchScienceFictions, requests.fetchThrillerMovies, requests.fetchTopRated,
                requests.fetchTrending];
            const request = await axios.get(allMovies[Math.floor(Math.random() * allMovies.length)]);

            let result = request.data.results[Math.floor(Math.random() * request.data.results.length)];
            while(result.backdrop_path == null) {
                result = request.data.results[Math.floor(Math.random() * request.data.results.length)];
            }
            setMovie(result);
            return request;
        }
        fetchData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }   

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

        },
        autoplay: 1
    }

    const handleClick = movie => {
        if(trailerUrl) setTrailerUrl("");
        else {
            movieTrailer(movie?.original_name || movie?.name  || movie?.original_title || movie?.title) 
                .then( url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error => console.log((error)))
        }
    }


    return (
        <React.Fragment>
            <header className="banner" 
                style={{backgroundSize: "cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
                , backgroundPosition: "center"}}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.title || movie?.original_title || movie?.name || movie?.original_name}</h1>

                    <div className="banner__buttons">
                        <button className="banner__button" onClick={() => handleClick(movie)}>Play</button>
                    </div>

                    <h1 className="banner__description">{truncate(movie?.overview, 200)}</h1>
                </div>

                <div className="banner--fadeBottom"></div>
            </header>
            
            <div className="banner__video">
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </React.Fragment>
    )
}

export default Banner
