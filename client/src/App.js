import React, { useState } from 'react';
import { Router as BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import { userLevels, permissionLevels } from './utilites.js/authorize';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AccessControl from './components/AccessControl';
import StatsPanel from './components/StatsPanel';
import ReactorControls from './components/ReactorControls';
import EmergencyCommunications from './components/EmergencyCommunications';
import NoAccess from './components/NoAccess';


const renderNoAccess = (permissionsNeeded) =>  <NoAccess permissionsNeeded={permissionsNeeded} />;

function App() {
  const [ user, setUser] =useState('');
  const userPermissions = (user && userLevels[user]) ? userLevels[user] : '';

  const handleLogin = (userLevel) => setUser(userLevel);

  const handleLogout = () => setUser('');
  return (
    <div className="App">
        <h1>Reactor Access Control</h1>
        {!user ? (<Login handleLogin={handleLogin}/>) 
        : 
        (<Dashboard user={user} userLevels={userLevels[user]} handleLogout={handleLogout}/>)}
        <AccessControl 
          userPermissions={userPermissions}
          allowedPermissions={permissionLevels.StatsPanel}
          renderNoAccess={()=>renderNoAccess(permissionLevels.StatsPanel)}
        >
          <StatsPanel />
        </AccessControl>
        <AccessControl 
          userPermissions={userPermissions}
          allowedPermissions={permissionLevels.EmergencyCommunications}
          renderNoAccess={()=>renderNoAccess(permissionLevels.EmergencyCommunications)}
        >
          < EmergencyCommunications />
        </AccessControl>
        <AccessControl 
          userPermissions={userPermissions}
          allowedPermissions={permissionLevels.ReactorControls}
          renderNoAccess={()=>renderNoAccess(permissionLevels.ReactorControls)}
        >
          <ReactorControls />
        </AccessControl>
    </div>
  );
}

export default App;
