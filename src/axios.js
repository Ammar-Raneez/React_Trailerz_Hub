import axios from 'axios'

//base url to make requests to the movie database, basically does what postman does
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

//instance.get('/foo');
//https://api.themoviedb.org/3/foo, is visited

export default instance;