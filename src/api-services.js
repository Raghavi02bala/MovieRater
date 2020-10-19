const TOKEN = "0d7440537cc8285889bd2e8f6cb1dfe528427a89";


export class API {
    // the static word lets u use the API without havint to initialize as new API, u can use it directly.
    static updateMovie(mov_id, body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }

    // for creating movie, POST 
    static createMovie( body ) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }

    // for deleting movie, DELETE
    static deleteMovie( mov_id ) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
        })
    }
} 