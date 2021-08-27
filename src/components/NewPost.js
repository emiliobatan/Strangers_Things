import React, { useState } from 'react';
import { callApi } from '../util';

// const { REACT_APP_BASE_URL } = process.env;
// const APIURL = REACT_APP_BASE_URL;

const NewPost = ({token}) => { 
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState ('')
    const [price, setPrice] = useState ('')
    const [location, setLocation] = useState ('')
    const [willDeliver, setWillDeliver] = useState (false)

    return <> 
        <h1> Create a post </h1>
        
        <form onSubmit={async (event) => {
            event.preventDefault(); 
            try { 
                const resp = await callApi({
                    method: 'POST',
                    url: '/posts',
                    token,
                    body: {
                        post: {
                            title,
                            description,
                            price,
                            willDeliver
                        }
                    }
                }) 
                return resp;
            }
            catch (err){
                console.error
            }

            // fetch(`${APIURL}/posts`, {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${token}`
            //     },
            //     body: JSON.stringify({
            //         post: {
            //         title,
            //         description,
            //         price,
            //         willDeliver
            //         }
            //     })
            //     }).then(response => response.json())
            //     .then(result => {
            //         console.log(result);
            //     })
            //     .catch(console.error);
            // }
         }}> 

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