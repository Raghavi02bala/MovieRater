import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from "./components/movie-form";

function App() {


  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 0d7440537cc8285889bd2e8f6cb1dfe528427a89'
      }
    })
      .then(resp => resp.json())
      .then(resp => setMovies(resp))
      .then(error => console.log(error))
  }, [])

  // const movieClick = (movie) => {
  //   setSelectedMovie(movie);
  //   setEditedMovie(null);
  // }

  // both movieClick and loadMovie are literally same, we don't have to rewrite in hooks
  // so we're passing loadMovie for both. But the above movieClick works fine only.

  const loadMovie = (movie) => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = (movie) => {
    setEditedMovie(movie);
    // both the edit and title won't be displayed at the same time.
    setSelectedMovie(null);
  }

  const updatedMovie = (movie) => {
    // we're  maping movies, with iterable "mov".
    const newMovies = movies.map(mov => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    })
    setMovies(newMovies)
  }
  
  const newMovie = () => {
    setEditedMovie({title: '', description: ''});
    setSelectedMovie(null);    
  }

  const movieCreated = (movie) => {
   const newMovies = [...movies, movie];
   setMovies(newMovies);    
  }

  const removeClicked = (movie) => {
    // i am copying the movies, to another var and doing the remove operation there
    const newMovies = movies.filter( mov => mov.id !== movie.id);
    setMovies(newMovies);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <div>
          <MovieList movies={movies} movieClickvar={loadMovie} editClicked={editClicked} removeClick={removeClicked} />
          <button onClick={newMovie}>New Movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        {editedMovie ? 
        <MovieForm movie={editedMovie} updated={updatedMovie} movieCreated={movieCreated} /> 
        : null}
      </div>
    </div>
  );
}

export default App;
