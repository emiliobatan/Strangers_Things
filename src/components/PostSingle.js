import React from 'react';

const PostSingle = ({post, children}) => {
  return post 
    ? <div style={{margin: '.2rem'}}>
      <h5>
        Title: {post.title}
      </h5>
      <div>
        Description: {post.description}
      </div>
      <div>
        Seller: {post.author.username}
      </div>
      <div>
        Price: {post.price}
      </div>
      <div>
        Will Deliver: {post.willDeliver ? 'yes': 'no'}
      </div>
      {
        children
      }
    </div>
    : 'Loading...'
}

export default PostSingle;