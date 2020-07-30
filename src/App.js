import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';

function App() {
	return (
		<div className="app">
			<Nav />

			<Banner />

			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action" fetchUrl={requests.fetchActionMovies} />
			<Row title="Adventure" fetchUrl={requests.fetchAdventureMovies} />
			<Row title="Fantasy" fetchUrl={requests.fetchFantasyMovies} />
			<Row title="Animated" fetchUrl={requests.fetchAnimatedMovies} />
			<Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Music" fetchUrl={requests.fetchMusicMovies} />
			<Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Thriller" fetchUrl={requests.fetchThrillerMovies} />
			<Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Mystery" fetchUrl={requests.fetchMysteryMovies} />
			<Row title="Drama" fetchUrl={requests.fetchDramaMovies} />
			<Row title="History" fetchUrl={requests.fetchHistoryMovies} />
			<Row title="Science Fiction" fetchUrl={requests.fetchScienceFictions} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

			<Footer />
		</div>
	);
}

export default App;
