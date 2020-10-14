import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';


function App() {


  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() =>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization':'Token 0d7440537cc8285889bd2e8f6cb1dfe528427a89'
      }
    })
    .then( resp => resp.json())
    .then( resp => setMovie(resp))
    .then( error => console.log(error))
  },[])

  const movieClick = (movie) =>{
    setSelectedMovie(movie);
  }

  const loadMovie = (movie) =>{
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} movieClick={movieClick}/>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
     
      </div>
    </div>
  );
}

export default App;
