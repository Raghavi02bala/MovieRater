import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import Auth from './components/auth';
import { API } from './api-services';

export const TokenContext = createContext(null);

function Router() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const loginClicked = () => {
    API.loginUser({username,password})
        .then(resp => setToken(resp.token))
        .then(error  => console.log(error))
}

  return (
    <React.StrictMode>    
      <TokenContext.Provider value={{token, setToken, loginClicked, username, setUsername, password, setPassword}}>      
        <BrowserRouter>
          <Route exact path="/" component={Auth} />
          <Route exact path="/movies" component={App} />
        </BrowserRouter>
      </TokenContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
