import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { callApi } from '../util';

const Login = ({setToken, setUser, setMessages, setUserId }) => { 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();

    return <>
        <h1> Login/Register </h1>
        <div> This is the {params.method} method. </div> 
        <form onSubmit={async (event) => { 
            event.preventDefault();
        
        const loginResp = await callApi({
            url: `/users/${params.method}`, 
            method: 'POST',
            body: { 
                user: { 
                    username, 
                    password
                }
            }
        });

        if(loginResp.data) { 
            const userResp = await callApi({ url: '/users/me', token: loginResp.data.token})
            setToken(loginResp.data.token);
            setUser(userResp.data.username);
            setUserId(userResp.data._id);
            setMessages(userResp.data.messages);
            if(loginResp.data.token) { 
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