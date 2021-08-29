import React from 'react';

const Home = ({user}) => {
    // console.log('user:', user);
    return <>
        <h1> Welcome to Stranger's Things! </h1>
        {
            user ? <div> 
            Logged in as {user}
            </div> : ''
        }
    </>
}

export default Home;