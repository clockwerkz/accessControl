import React from 'react';

const Login = (props) => {
    return (
        <div className="login">
            <h1>Login Screen</h1>
            <button className="btn btn--login" onClick={()=>{props.handleLogin('plantManager')}}>Login as Plant Manager</button>
            <button className="btn btn--login" onClick={()=>{props.handleLogin('safetyInspector')}}>Login as Safety Inspector</button>
        </div>
    )
}

export default Login;