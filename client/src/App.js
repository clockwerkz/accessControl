import React, { useState } from 'react';
import { Router as BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import { userLevels, permissionLevels } from './utilites.js/authorize';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AccessControl from './components/AccessControl';

import NoAccess from './components/NoAccess';


const renderNoAccess = (permissionsNeeded) =>  <NoAccess permissionsNeeded={permissionsNeeded} />;

function App() {
  const [ user, setUser] =useState('');
  const userPermissions = (user && userLevels[user]) ? userLevels[user] : '';

  const handleLogin = (userLevel) => setUser(userLevel);

  const handleLogout = () => setUser('');
  return (
    <BrowserRouter>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </BrowserRouter>
  );
}

export default App;
