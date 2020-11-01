import React, { useEffect, useContext } from 'react';
import { TokenContext } from '../index';

function Auth() {

    const user = useContext(TokenContext);

    useEffect(() => {
        console.log(user.token);
        if(user.token){
            window.location.href = '/movies';
        }
    }, [user.token])

   

    return (
        <div>
            <label htmlFor="username">Username</label><br />
            <input
                // ref={textInput}
                type="text" id="username" placeholder="username" value={user.username}
                onChange={event => user.setUsername(event.target.value)}
            /><br />
            <label htmlFor="password">Password</label><br />
            <input
                // ref={textInp} 
                type="password" id="password" placeholder="password" value={user.password}
                onChange={event => user.setPassword(event.target.value)}
            /><br />
            <button onClick={user.loginClicked}>Login</button>
        </div>
    )
}

export default Auth;