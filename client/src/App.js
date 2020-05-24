import React, { useState } from 'react';
import { Router as BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import { userLevels } from './utilites.js/authorize';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AccessControl from './components/AccessControl';
import StatsPanel from './components/StatsPanel';
import NoAccess from './components/NoAccess';


const renderNoAccess = (permissionsNeeded) =>  <NoAccess permissionsNeeded={permissionsNeeded} />;


function App() {
  const [ user, setUser] =useState('');

  const handleLogin = (userLevel) => setUser(userLevel);

  const handleLogout = () => setUser('');
  return (
    <div className="App">
        <h1>React Access Control</h1>
        {!user ? (<Login handleLogin={handleLogin}/>) : (<Dashboard handleLogout={handleLogout}/>)}
        <AccessControl 
          userPermissions={["read"]}
          allowedPermissions={["read"]}
          renderNoAccess={renderNoAccess}
        >
          <StatsPanel />
        </AccessControl>
    </div>
  );
}

export default App;
