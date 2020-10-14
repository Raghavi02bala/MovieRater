import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MovieDetails(props) {

    const mov = props.movie;

    const [highlighted, setHighlighted] = useState(-1);

    const highlightRate = (high) => evt => {
        setHighlighted(high);
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 0d7440537cc8285889bd2e8f6cb1dfe528427a89'
            },
            body: JSON.stringify( { stars: rate + 1 } )
        }
        )
            .then(() => getDetails())
            .then(error => console.log(error))
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 0d7440537cc8285889bd2e8f6cb1dfe528427a89'
            },
        }
        )
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .then(error => console.log(error))
    }

    return (
        <Fragment>
            {props.movie ? (
                <div>
                    <div>
                        <h1>{mov.title}</h1>
                        <p>{mov.description}</p>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? 'orange' : ''} />
                    ({props.movie.no_of_ratings})
                </div>
                    <div className="rate-container">
                        <h2>Rate it</h2>
                        {
                            [...Array(5)].map((e, i) => {
                                // console.log(i); 
                                // here i is the array elements being passed.
                                return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'purple' : ''}
                                    onMouseEnter={highlightRate(i)}
                                    onMouseLeave={highlightRate(-1)}
                                    onClick={rateClicked(i)}
                                />
                            })
                        }
                    </div>
                </div>
            ) :
                <h2>Click on movies to see detail</h2>
            }
        </Fragment>
    );
}

export default MovieDetails;
