import React, { Fragment, useState, useEffect } from 'react';
import { API } from '../api-services';

function MovieForm(props) {

    // creating ref to print the current value, without storing it in onChange.
    // let textInput = React.createRef();
    // let textInp = React.createRef();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTitle(props.movie.title)
        setDescription(props.movie.description)
    }, [props.movie])

    const updateClicked = () => {
        API.updateMovie(props.movie.id, { title, description })
            .then(resp => props.updated(resp))
            .catch(error => console.log(error))
        // console.log(textInput.current.value);
        // console.log(textInp.current.value);
    }

    const createClicked = () => {
        API.createMovie({ title, description })
            .then(resp => props.movieCreated(resp))
            .catch(error => console.log(error))
        // console.log(textInput.current.value);
        // console.log(textInp.current.value);
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