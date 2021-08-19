import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const cohortName = '2105-SJS-RM-WEB-PT'
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

import { Posts } from './components';

const App = () => {

    fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
            username: 'superman27',
            password: 'krypt0n0rbust'
            }
        })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);


    const [posts, setPosts] = useState([]);
    console.log('posts', posts);


    useEffect(() => {
        const fetchPosts = async () => { 
            const resp = await fetch(`${APIURL}/posts`)
            const stuff = await resp.json();
            setPosts(stuff.data.posts);
        }
        fetchPosts();
    }, [])



  return <>
    <h1> 
        Hello World
    </h1>
    <Posts /> 
 {
     posts.map(post => <div key={post._id}> 
        <h3> {post.title} </h3> 
        <div> {post.description} </div>
        <div> Price: {post.price} </div>
        <div> Seller: {post.seller} </div>
        <div> Location: {post.location} </div>
     </div>)
 }

  </>

}



ReactDOM.render(
  <App />,
  document.getElementById('app'),
);