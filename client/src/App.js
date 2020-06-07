import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import { login } from './utilites.js/authorize';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Profile from './components/Profile';
import ProtectedRoute from './components/routes/ProtectedRoute';



function App() {
  const [ user, setUser] =useState();
  const handleLogin = (requestedUser) => {
    login(requestedUser)
      .then(loggedUser => setUser(loggedUser));
  }



  const handleLogout = () => setUser('');
  return (
    <Router>
      <NavBar user={user}/>
      <ProtectedRoute path='/' exact component={Dashboard} handleLogout={handleLogout} user={user}/> 
      <Route path="/login">
        <Login  handleLogin={handleLogin} user={user}/>
      </Route> 
      <Route path="/profile" component={Profile} />
      <Route path='/projects'>
        <Projects />
      </Route>
    </Router>
  );
}

export default App;
