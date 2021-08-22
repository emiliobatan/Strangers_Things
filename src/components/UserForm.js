import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router';

const { REACT_APP_BASE_URL } = process.env;


const UserForm = ({setToken, setUsers}) => { 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const params = useParams();
    const history = useHistory();
    console.log(params.method);

return <> 
    <h1> Login/Register </h1>
    <div> This is the {params.method} method. </div> 
    <form onSubmit={async (event) => { 
        event.preventDefault();
        const fetchURL = `${REACT_APP_BASE_URL}/users/${params.method}`
        console.log('fetchURL: ', fetchURL);

        const resp = await fetch(`${REACT_APP_BASE_URL}/users/${params.method}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                username,
                password
        }
      })
    });
    const dataObj = await resp.json();
    console.log('dataObj: ', dataObj);
    

    if(dataObj.data) { 
        setToken(dataObj.data.token);
        setUsers(dataObj.data.user);
        if(dataObj.data.token) { 
            history.push('/');
        }
    }

    }}>
        <input type='text' placeholder ='username' value={username} onChange={(event) => setUsername(event.target.value)}></input> 
        <input type='password' placeholder ='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <button type="submit">Submit</button>
    </form>
    </>

}

export default UserForm; 