import React from 'react'

const UserForm = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
}

return <> 
    <h1> Login/Register </h1>
    <form onSubmit={async (event) => { 
        event.defaultPrevented();
    }}>
        <input type='text' placeholder ='username' value='username' onChange={(event) => setUsername(event.target.value)}></input> 
        <input type='password' placeholder ='password' value='password' onChange={(event) => setPassword(event.target.value)}></input>
        <button type='submit'></button>
    </form>
    </>

export default UserForm; 