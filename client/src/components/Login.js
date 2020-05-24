import React from 'react';

const Login = (props) => {
    return (
        <div className="login" onClick={props.handleLogin}>
            <h1>Login Screen</h1>
        </div>
    )
}

export default Login;