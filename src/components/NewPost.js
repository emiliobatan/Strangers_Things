import React, { useState } from 'react';
import { callApi } from '../util';

const NewPost = ({token, setPosts}) => { 
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState ('')
    const [price, setPrice] = useState ('')
    const [location, setLocation] = useState ('')
    const [willDeliver, setWillDeliver] = useState (false)

    const handleAdd = async (ev) => {
        ev.preventDefault();
        console.log({location, description, price, title, willDeliver})
        const postResp = await callApi({
            url: '/posts',
            method: 'POST',
            token, 
            body: {
                post: {
                    title,
                    description,
                    price,
                    location,
                    willDeliver
                }
            }
        });
        const postsResp = await callApi({ url: '/posts', token});
        setPosts(postsResp.data.posts);
    }

    return <> 
        <h1> Create a post </h1>
        <form onSubmit = {handleAdd}> 
            <fieldset> 
                <label> Title </label>
                <input type="text" placeholder="Enter Title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            </fieldset>
            <fieldset> 
                <label> Description </label>
                <input type="text" placeholder="Enter Description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
            </fieldset>
            <fieldset> 
                <label> Price </label>
                <input type="text" placeholder="Enter Price" value={price} onChange={(event) => setPrice(event.target.value)}></input>
            </fieldset>
            <fieldset> 
                <label> Location </label>
                <input type="text" placeholder="Enter Location" value={location} onChange={(event) => setLocation(event.target.value)}></input>
            </fieldset>
            <fieldset> 
                <label> Will Deliver </label>
                <select type="text" value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </fieldset>
            <button type="submit"> Post </button>
            </form>
    </> 
}

export default NewPost;