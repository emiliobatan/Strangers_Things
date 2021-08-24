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
    const [users, setUsers] = useState('');
    // console.log('token: ', token);
    console.log('user:', users);


    return <> 
        <h1> Stranger's Things </h1>
        <Link to = '/posts'> Post </Link> |
        {
            token ? <button className ='logout' onClick = {() => setToken('')}>Logout</button> : <Link to ='/users/login'>Login | </Link> 
        }
        <Link to = '/newpost'> NewPost </Link> | 
        {/* <Link to = '/user/login'> Login </Link> | */}
        {/* <Link to ='/user/register'> Register </Link> | */}
        <Link to ='/Home'> Home </Link>'

    <div> 
        <Route exact path="/"> 
            <Home />
        </Route>
        <Route exact path="/posts">
            <Posts token = {token} /> 
        </Route>
        <Route path="/newpost"> 
            <NewPost token = {token} setUsers ={setUsers}/> 
        </Route>
        <Route exact path="/users/:method">
            <Login setToken = {setToken} setUsers = {setUsers} />
        </Route>
    </div>
  </> 
}

export default App;