import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, user, handleLogout, ...rest}) => (
    <Route {...rest} render={(props) => (
        user ? <Component {...props} user={user} handleLogout={handleLogout}/> : <Redirect to='/login' />
    )} />
)


export default ProtectedRoute;