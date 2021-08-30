import React, { useEffect, useState } from 'react'; 
import { Route, Link } from 'react-router-dom';

import {
    Login,
    Posts,
    Home, 
    NewPost,
    PostView,
    Profile,
    Search
  } from './index';

import { callApi } from '../util';


const App = () => { 
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([])
    const [userId, setUserId] = useState('');
    
    const fetchPosts = async () => {
        const respObj = await callApi({
          url: `/posts`,
          token
        });
        const postsObj = respObj.data.posts;
        if(postsObj) setPosts(postsObj);
      }

    useEffect(() => {
        try { 
            fetchPosts();
        } catch (error) {
            console.log(error);
        }
    }, [token]);

    return <> 
        <h1> Stranger's Things </h1>
        <Link to = '/posts' className ='link'> Post </Link> |
        {
            token ? <Link to = '/profile'> Profile </Link> : ''
        }
        {
            token ? <button className ='logout' onClick = {() => setToken('')}>Logout</button> : <Link to ='/user/login'>Login | </Link> 
        }
        <Link to ='/Home'> Home </Link>
        
    <div> 
        <Route exact path="/"> 
            <Home user={user} token ={token} userId = {userId} messages ={messages}/>
        </Route>
        <Route exact path="/posts">
            <Search posts={posts} setPosts={setPosts}/>
            {token ? <NewPost token = {token} setPosts={setPosts}/>: null} 
            <Posts posts ={posts} token = {token} fetchPosts = {fetchPosts} setPosts={setPosts}/> 
        </Route>
        <Route exact path="/user/:method">
            <Login setToken = {setToken} setUser = {setUser} setUserId = {setUserId} setMessages = {setMessages}/>
        </Route>
        <Route exact path='/posts/:postId'>
            <PostView posts = {posts} token = {token} user={user}> </PostView>
        </Route>
        <Route exact path ='/profile'> 
            <Profile token = {token} setPosts = {setPosts} setMessages = {setMessages} posts = {posts} messages = {messages} userId ={userId} />
        </Route>
    </div>
  </> 
}

export default App;