import React, { useState, useEffect } from 'react'; 
import { Route, Link } from 'react-router-dom';

import {
    UserForm,
    Posts,
    Home, 
    NewPost
  } from './index';

// const { REACT_APP_BASE_URL } = process.env;

const App = () => { 
    const [token, setToken] = useState('');
    const [users, setUsers] = useState('');
    
    // const [guestUsr, setGuestUsr] = useState('');
    console.log('token: ', token);
    return <> 
        <h1> Stranger's Things </h1>
        <Link to = '/posts'> Post |, </Link>
        <Link to = '/newpost'>NewPost |, </Link>
        <Link to = '/user/login'> Login |, </Link>
        <Link to ='/user/register'> Register |, </Link>

    <div> 
        <Route exact path="/"> 
            <Home />
        </Route>
        <Route exact path="/posts">
            <Posts/> 
        </Route>
        <Route path="/newpost"> 
            <NewPost token = {token} setUsers ={setUsers}/> 
        </Route>
        <Route exact path="/user/:method">
            <UserForm setToken={setToken} setUsers ={setUsers} />
        </Route>
    </div>
  </> 
}

export default App;