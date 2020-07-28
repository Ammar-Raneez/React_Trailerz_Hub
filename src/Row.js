import React, { useState, useEffect } from 'react'
//if there's a default export, you can name it whatever you want
//you can have only one export default in a file, cuz then js wouldnt know what exactly
//are you importing, cuz it can be of any name
//however other types of export (export infront of function), need to be within {} with the exact name
import axios from './axios';
import './Row.css';

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

//image url, append poster path to this for source
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    //all the movies
    const [movies, setMovies] = useState([]);
    //movie trailer url
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //forms this url, with our api key
            //https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
            setMovies(request.data.results);
            return Request;
        }
        fetchData();
    }, [fetchUrl])

    //width and height for a video
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

        },
        //play again after single run
        autoplay: 1
    }

    //when user clicks on a poster, the clicked movie is passed into this function
    const handleClick = movie => {
        //if there's a url already open remove the url, thereby hiding the movie
        if(trailerUrl) setTrailerUrl("");
        else {
            //an npm module, that takes in a name, and goes to youtube and finds a trailer of that name
            //sometimes name is undefined as well
            movieTrailer(movie?.name || "") 
                .then( url => {
                    console.log(movie.name)
                    //youtube.com/watch?v=V1GqkHLwotk
                    //*url returned from promise is a full youtube url*//
                    //*we need the url param of the full url, to pass it into the trailerId prop of YouTube component*//
                    const urlParams = new URLSearchParams(new URL(url).search);
                    //*the id of the video is from the search param 'v', we do this cuz there can also be many search params*//
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error => console.log((error)))
        }
    }
    console.log(trailerUrl)

    return (
        <div className="row">
            {/*title*/}
            <h2>{title}</h2>

            {/*container -> posters, each movie posters*/}
            <div className="row__posters">
                {/*several row posters*/}
                {movies.map(movie => {
                    //pull in backdrop/poster based on whether is it the top row(originals)
                    return (
                        <img className={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path? movie.backdrop_path : movie.poster_path}`} 
                            alt={movie.name} key={movie.id}
                            onClick={() => handleClick(movie)}
                        />  
                    )
                })}
            </div>
            
            {/*url of a video, some options for the video, show only if we have a url*/}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
