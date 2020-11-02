import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { API } from '../api-services';
import { useCookies } from 'react-cookie';

function MovieList(props) {
    const [token] = useCookies(['mr-token']);

    // there is one arrow fn that is gonna return another arrow fn
    const movieClicked = (movie) => event => {
        props.movieClickvar(movie)
    }

    const editClicked = (movie) => {
        props.editClicked(movie);
    }

    const removeClicked = (movie) => {
        API.deleteMovie(movie.id, token['mr-token'])
            .then( () => props.removeClick(movie) )
            .catch(error => console.log(error))
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
                            <FontAwesomeIcon icon={faTrash} onClick={() => removeClicked(movie)} cursor="pointer"/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MovieList;
