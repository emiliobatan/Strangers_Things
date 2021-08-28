import React from 'react';

const Home = ({user}) => {

    return <>
        <h1> Welcome to Stanger's Things! </h1>
        {
            user ? <div> 
            Logged in as {user.username}
            </div> : ''
        }
    </>
}



export default Home;