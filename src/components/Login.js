import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;


const Login = ({setToken, setUser, token}) => { 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();


return <>
    <h1> Login/Register </h1>
    <div> This is the {params.method} method. </div> 
    <form onSubmit={async (event) => { 
        event.preventDefault();
    
    const dataObj = await callApi({
        url: `/users/${params.method}`, 
        method: 'POST',
        body: { 
            user: { 
                username, 
                password
            }
        }
    });
    //     const fetchURL = `${REACT_APP_BASE_URL}/users/${params.method}`
    //     console.log('fetchURL: ', fetchURL);

    //     const resp = await fetch(`${REACT_APP_BASE_URL}/users/${params.method}`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             user: {
    //             username,
    //             password
    //     }
    //   })
    // });
 
    // const dataObj = await resp.json();
    // console.log('dataObj: ', dataObj);


    if(dataObj.data) { 
        console.log('data.obj.exists:', dataObj.data)
        setToken(dataObj.data.token);
        const usrResp = await fetch(`${REACT_APP_BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${dataObj.data.token}`
            }
        })
        const usrRespObj = await usrResp.json();
        console.log('usrRespObj:', usrRespObj);
        setUser(usrRespObj.data);
        if(dataObj.data.token) { 
            history.push('/');
        }
    }

    }}>
        <input type='text' placeholder ='username' value={username} onChange={(event) => setUsername(event.target.value)}></input> 
        <br/>
        <br/> 
        <input type='password' placeholder ='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <br/>
        {
            params.method === 'register' ? <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
            :''
        }
        {
            !password.value === password.value ? <button disabled={!password || !username || password.length < 7 || password !== verPass} >Submit</button> : <button type='submit'>Submit</button> 
        }
    
    </form>
    {params.method === 'login' ? <Link to = '/user/register'> Click here to register</Link> : <Link to = '/user/login'> Click here to login </Link>}
    </>
}

export default Login; 