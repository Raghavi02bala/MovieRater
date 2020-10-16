import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


function movieList(props) {

    // there is one arrow fn that is gonna return another arrow fn
    const movieClicked = (movie) => event => {
        props.movieClickvar(movie)
    }

    const editClicked = (movie) => {
        props.editClicked(movie);
    }

    return (
        <div>
            <div>
                {props.movies && props.movies.map(movie => {
                    return (
                        <div key={movie.id} className="movie-item">
                            <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
                            {/* the arrow function is here to pass the movie that has been selected as param */}
                            <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)} cursor="pointer"/>
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default movieList;
