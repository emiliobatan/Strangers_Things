import React, { useState, useEffect} from 'react';

function Search({posts, setPosts}) {
    const [searchedItem, setSearchedItem] = useState('');
    const postMatches = (post, text) => {
        let check = post.includes(text);
        return check;
    }
    const handleSubmit = () => {
        const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchedItem));
        setPosts(filteredPosts);
        if (!searchedItem.length) {
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
    <input type="text" placeholder="search..." value={searchedItem} onChange={(event) => setSearchedItem(event.target.value)}></input>
    <button type="submit">Search</button>
</form>
</>
}
export default Search;