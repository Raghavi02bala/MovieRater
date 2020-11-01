import React, { useState, useEffect, useContext } from 'react';
import { API } from '../api-services';
import { TokenContext } from '../index';

function Auth() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {token,setToken} = useContext(TokenContext);

    useEffect(() => {
        console.log(token);
        if(token){
            window.location.href = '/movies';
        }
    }, [token])

    const loginClicked = () => {
        API.loginUser({username,password})
            .then(resp => setToken(resp.token))
            .then(error  => console.log(error))
    }

    return (
        <div>
            <label htmlFor="username">Username</label><br />
            <input
                // ref={textInput}
                type="text" id="username" placeholder="username" value={username}
                onChange={event => setUsername(event.target.value)}
            /><br />
            <label htmlFor="password">Password</label><br />
            <input
                // ref={textInp} 
                type="password" id="password" placeholder="password" value={password}
                onChange={event => setPassword(event.target.value)}
            /><br />
            <button onClick={loginClicked}>Login</button>
        </div>
    )
}

export default Auth;