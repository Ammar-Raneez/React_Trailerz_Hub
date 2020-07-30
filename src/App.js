import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className="app">
			{/*navbar*/}
			<Nav />

			{/*banner*/}
			<Banner />

			{/*all rows*/}
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
			<Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
			<Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
			<Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
			<Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
			<Row title="Science Fictions" fetchUrl={requests.fetchScienceFictions} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
