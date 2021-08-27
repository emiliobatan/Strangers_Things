import React, { useState, useEffect } from 'react';

const { REACT_APP_BASE_URL } = process.env;
const APIURL = REACT_APP_BASE_URL;
// console.log('APIURL: ', APIURL)

const Posts = () => { 
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

    return (
    <>
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
    )
}

export default Posts;