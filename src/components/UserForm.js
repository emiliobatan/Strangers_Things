import React, { useState } from 'react'

const { REACT_APP_BASE_URL } = process.env;
const APIURL = REACT_APP_BASE_URL;
console.log('APIURL: ', APIURL)

const UserForm = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
}

return <> 
    <h1> Login/Register </h1>
    <form onSubmit={async (event) => { 
        event.preventDefault();
    }}>
        <input type='text' placeholder ='username' value='username' onChange={(event) => setUsername(event.target.value)}></input> 
        <input type='password' placeholder ='password' value='password' onChange={(event) => setPassword(event.target.value)}></input>
        <button type='submit'></button>
    </form>
    </>

export default UserForm; 