import React from 'react';

const Home = ({users}) => {

    return <>
        <h1> Welcome to Stanger's Things! </h1>
        {
            users ? <div> 
            Logged in as {users.username}
            </div> : ''
        }
    </>
}



export default Home;