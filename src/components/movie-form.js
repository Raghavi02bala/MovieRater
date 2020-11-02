import React, { Fragment, useState, useEffect } from 'react';
import { API } from '../api-services';
import { useCookies } from 'react-cookie';

function MovieForm(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [token] = useCookies(['mr-token']);

    useEffect(() => {
        setTitle(props.movie.title)
        setDescription(props.movie.description)
    }, [props.movie])

    const updateClicked = () => {
        API.updateMovie(props.movie.id, { title, description }, token['mr-token'])
            .then(resp => props.updated(resp))
            .catch(error => console.log(error))
    }

    const createClicked = () => {
        API.createMovie({ title, description }, token['mr-token'])
            .then(resp => props.movieCreated(resp))
            .catch(error => console.log(error))
    }


    

    return (
        <Fragment>
            {props.movie ?
                (
                    <div>
                        <label htmlFor="title">Title</label><br />
                        <input
                            // ref={textInput}
                            type="text" id="title" placeholder="Title" value={title}
                            onChange={event => setTitle(event.target.value)}
                        /><br />
                        <label htmlFor="description">Description</label><br />
                        <textarea
                            // ref={textInp} 
                            type="text" id="description" placeholder="Description" value={description}
                            onChange={event => setDescription(event.target.value)}
                        >
                        </textarea><br />
                        {props.movie.id ?
                            <button onClick={updateClicked}>Update</button> :
                            <button onClick={createClicked}>Create</button>
                        }
                    </div>
                )
                :
                    null
            }
        </Fragment>
    );
}
export default MovieForm;