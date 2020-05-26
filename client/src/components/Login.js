import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ handleLogin, user }) => {
    if (user) {
        return <Redirect to='/' />
    }
    return (
        <div className="login">
            <h1>Login Screen</h1>
            <button className="btn btn--login" onClick={()=>{handleLogin('projectMember')}}>Login as Project Member</button>
            <button className="btn btn--login" onClick={()=>{handleLogin('projectManager')}}>Login as Project Manager</button>
        </div>
    )
}

export default Login;