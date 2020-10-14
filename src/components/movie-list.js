import React from 'react'

function movieList(props) {

    // there is one arrow fn that is gonna return another arrow fn
    const movieClicked = (movie) => event =>{
        props.movieClick(movie)
    }

    return (
        <div>
            <div>
          { props.movies && props.movies.map( movie => {
          return(
              <div key={movie.id}>
                  <h4 onClick={movieClicked(movie)}>{movie.title}</h4>
              </div>
          )
        })}
        </div>            
        </div>
    );
}

export default movieList;
