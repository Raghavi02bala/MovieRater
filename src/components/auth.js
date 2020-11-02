import React, { useEffect, useState } from 'react';
import { API } from '../api-services';
import { useCookies } from 'react-cookie'

function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginView, setIsLoginView] = useState(true);

    const [token, setToken] = useCookies(['mr-token']);


    useEffect(() => {
        console.log(token);
        if (token['mr-token']) window.location.href = '/movies';
    }, [token])

    const loginClicked = () => {
        API.loginUser({ username, password })
            .then(resp => setToken('mr-token', resp.token))
            .then(error => console.log(error))
    }

    const registerClicked = () => {
        API.registerUser({ username, password })
            .then(() => loginClicked())
            .then(error => console.log(error))
    }

    return (
        <div>
            {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
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
            {isLoginView ?
                <button onClick={loginClicked}>Login</button>
                :
                <button onClick={registerClicked}>Register</button>}
            {isLoginView ?
                <p onClick={() => setIsLoginView(false)}>You don't have an account? Register here!</p>
                :
                <p onClick={() => setIsLoginView(true)}>You have an account? Login here!</p>
            }
        </div>
    )
}

export default Auth;