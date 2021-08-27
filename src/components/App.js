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


    return <> 
        <h1> Stranger's Things </h1>
        <Link to = '/posts'> Post </Link> |
        {
            token ? <button className ='logout' onClick = {() => setToken('')}>Logout</button> : <Link to ='/users/login'>Login | </Link> 
        }
        <Link to = '/newpost'> NewPost </Link> | 
        {/* <Link to = '/user/login'> Login </Link> | */}
        {/* <Link to ='/user/register'> Register </Link> | */}
        <Link to ='/Home'> Home </Link>

    <div> 
        <Route exact path="/"> 
            <Home users={users}/>
        </Route>
        <Route exact path="/posts">
            <Posts token = {token} /> 
        </Route>
        <Route path="/newpost"> 
            <NewPost token = {token} setUsers ={setUsers}/> 
        </Route>
        <Route exact path="/users/login">
            <Login setToken = {setToken} setUsers = {setUsers} token ={token}/>
        </Route>
        <Route exact path="/users/register">
            <Login setToken = {setToken} setUsers = {setUsers} token ={token}/>
        </Route>
    </div>
  </> 
}

export default App;