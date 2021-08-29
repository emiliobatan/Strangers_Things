import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';


// const { REACT_APP_BASE_URL } = process.env;

import {
    PostSingle,
  } from './';
  
  const Posts = ({posts, token, fetchPosts}) => {
  
    const handleDelete = async (postId) => {
      const respObj = await callApi({
        method: 'DELETE',
        url: `/Posts/${postId}`,
        token
      });
      console.log('respObj: ', respObj);
      await fetchPosts();
    }
   
    
    return <>
      {
        posts.map(post => <PostSingle key={post._id} post={post} token={token}>
          {/* props.children */}
          <Link to={`/posts/${post._id}`}>View Post</Link>
          {
            post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete</button>
          }
        </PostSingle>)
      }
    </>
  }

export default Posts;