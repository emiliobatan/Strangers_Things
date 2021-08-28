import React, { useState } from 'react'; 
import { Route, Link } from 'react-router-dom';

import {
    Login,
    Posts,
    Home, 
    NewPost
  } from './index';

// const { REACT_APP_BASE_URL } = process.env;

const App = () => { 
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');


    return <> 
        <h1> Stranger's Things </h1>
        <Link to = '/posts'> Post </Link> |
        {
            token ? <button className ='logout' onClick = {() => setToken('')}>Logout</button> : <Link to ='/user/login'>Login | </Link> 
        }
        <Link to = '/newpost'> NewPost </Link> | 
        {/* <Link to = '/user/login'> Login </Link> | */}
        {/* <Link to ='/user/register'> Register </Link> | */}
        <Link to ='/Home'> Home </Link>

    <div> 
        <Route exact path="/"> 
            <Home user={user}/>
        </Route>
        <Route exact path="/posts">
            <Posts token = {token} /> 
        </Route>
        <Route path="/newpost"> 
            <NewPost token = {token} setUser ={setUser}/> 
        </Route>
        <Route exact path="/user/:method">
            <Login setToken = {setToken} setUser = {setUser} token ={token}/>
        </Route>

    </div>
  </> 
}

export default App;