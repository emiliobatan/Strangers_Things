import React, { useState } from 'react';

function Search({posts, setPosts}) {
    const [searchItem, setsearchItem] = useState('');
    const postMatch = (post, text) => {
        let check = post.includes(text);
        return check;
    }
    const handleSubmit = () => {
        const filteredPosts = posts.filter(post => postMatch(post.title.toLowerCase(), searchItem));
        setPosts(filteredPosts);
        if (!searchItem.length) {
            fetchPosts();
        }
    }
    const fetchPosts = async () => {
        const response = await callApi({
            url: '/posts',
});
const allPosts = response.data.posts;
        if(allPosts) setPosts(allPosts);
    }
return <>
<form onSubmit={(ev) => {
    ev.preventDefault()
    handleSubmit()
}}>
    <input type="text" placeholder="search..." value={searchItem} onChange={(event) => setsearchItem(event.target.value)}></input>
    <button type="submit">Search</button>
</form>
</>
}
export default Search;