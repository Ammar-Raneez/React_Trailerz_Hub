import React, { useState, useEffect } from 'react'

import axios from './axios';
import './Row.css';

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return Request;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

        },
        autoplay: 1
    }

    const handleClick = movie => {
        console.log(movie)
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
        <div className="row">
            <h2 className="row__title">{title}</h2>

            <div className="row__posters">
                {movies.map(movie => {
                    if(movie.poster_path || movie.backdrop_path) {
                        return (
                            <div className="row_div"  onClick={() => handleClick(movie)}>
                                <img className="row__poster" alt={movie.name} key={movie.id}
                                    src={`${base_url}${movie.poster_path? movie.poster_path : movie.backdrop_path}`} 
                                />  
                                <div class="row__overlay">
                                    <div class="row__overlayText">
                                        <h2>{movie?.name || movie?.original_name || movie?.title  || movie?.original_title}</h2>
                                        <br/>
                                        <p>{movie?.release_date || movie?.first_air_date}</p>
                                        <br/><br/>
                                        <p className="row__overlayText__rating">{movie?.vote_average}/10</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    return <div></div>
                })}
            </div>
            
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
