import React, { Fragment, useState } from 'react';
import { API } from '../api-services';

function MovieForm(props) {

    // creating ref to print the current value, without storing it in onChange.
    // let textInput = React.createRef();
    // let textInp = React.createRef();

    const [title, setTitle] = useState(props.movie.title);
    const [description, setDescription] = useState(props.movie.description);

    const updateClicked = () =>{
        API.updateMovie(props.movie.id, {title, description})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        // console.log(textInput.current.value);
        // console.log(textInp.current.value);
    }

    return (
        <Fragment>
            {props.movie ?
                (
                    <div>
                        <label htmlFor="title">Title</label><br/>
                        <input 
                            // ref={textInput}
                            type="text" id="title" placeholder="Title" value={title}
                            onChange={event => setTitle(event.target.value)}
                        /><br/>
                        <label htmlFor="description">Description</label><br/>
                        <textarea
                            // ref={textInp} 
                            type="text" id="description" placeholder="Description" value={description}
                            onChange={event => setDescription(event.target.value)}
                        > 
                        </textarea><br/>
                        <button onClick={updateClicked}>Update</button>
                    </div>
                )
                :
                null
            }
        </Fragment>
    );
}
export default MovieForm;