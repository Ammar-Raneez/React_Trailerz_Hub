import React, { useState, useEffect } from 'react'
//if there's a default export, you can name it whatever you want
//you can have only one export default in a file, cuz then js wouldnt know what exactly
//are you importing, cuz it can be of any name
//however other types of export (export infront of function), need to be within {} with the exact name
import axios from './axios';
import './Row.css';

//image url, append poster path to this for source
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

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

    console.table(movies)

    return (
        <div className="row">
            {/*title*/}
            <h2>{title}</h2>

            {/*container -> posters, each movie posters*/}
            <div className="row__posters">
                {/*several row posters*/}
                {movies.map(movie => {
                    return (
                        <img className="row__poster" src={`${base_url}${movie.poster_path}`} 
                            alt={movie.name} key={movie.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Row
