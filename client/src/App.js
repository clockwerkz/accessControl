import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import { login } from './utilites.js/authorize';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/routes/ProtectedRoute';



function App() {
  const [ user, setUser] =useState('');

  const handleLogin = (requestedUser) => {
    login(requestedUser)
      .then(loggedUser => setUser(loggedUser));
  }

  const handleLogout = () => setUser('');
  return (
    <Router>
      <NavBar user={user}/>
      <Route path="/login">
        <Login  handleLogin={handleLogin} user={user}/>
      </Route>
      <ProtectedRoute path='/' component={Dashboard} handleLogout={handleLogout} user={user}/>  
    </Router>
  );
}

export default App;
