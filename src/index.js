import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// const cohortName = '2105-SJS-RM-WEB-PT'
// const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const { REACT_APP_BASE_URL } = process.env;
const APIURL = REACT_APP_BASE_URL;
console.log('APIURL: ', APIURL)
// const environment = process.env;
// const REACT_APP_BASE_URL = environment.REACT_APP_BASE_URL;
// console.log('REACT_APP_BASE_URL', REACT_APP_BASE_URL);
// console.log('environment', environment);



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


    // const [posts, setPosts] = useState([]);
    // console.log('posts', posts);


    // useEffect(() => {
    //     const fetchPosts = async () => { 
    //         const resp = await fetch(`${APIURL}/posts`)
    //         const stuff = await resp.json();
    //         setPosts(stuff.data.posts);
    //     }
    //     fetchPosts();
    // }, [])
    
    // const UserForm = () => { 
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
            console.log('username:', username);
            console.log('password:', password)
    // }
    


  return <>
    {/* <h1> 
        Hello World
    </h1>
    <h1> Login/Register </h1>
    <form onSubmit={async (event) => { 
        event.preventDefault();
    }}>
        <input type='text' placeholder ='username' value='username' onChange={(event) => setUsername(event.target.value)}></input> 
        <input type='password' placeholder ='password' value='password' onChange={(event) => setPassword(event.target.value)}></input>
        <button type='submit'></button>
    </form> */}
    <Posts /> 
 {/* {
     posts.map(post => <div key={post._id}> 
        <h3> {post.title} </h3> 
        <div> {post.description} </div>
        <div> Price: {post.price} </div>
        <div> Seller: {post.seller} </div>
        <div> Location: {post.location} </div>
     </div>)
 } */}

  </>

}



ReactDOM.render(
  <App />,
  document.getElementById('app'),
);