import React, {useState, useEffect} from 'react';
import './App.css';

function App() {


  const [movies, setMovie] = useState([]);

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

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <div>
          { movies.map( movie => {
          return <h4>{movie.title}</h4>
        })}
        </div>
        <div>Movie details</div>
      </div>
    </div>
  );
}

export default App;
