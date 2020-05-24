import React, { useState } from 'react';
import { Router as BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AccessControl from './components/AccessControl';
import StatsPanel from './components/StatsPanel';


function App() {
  const [ user, setUser] =useState('');

  const handleLogin = () => setUser('user');
  return (
    <div className="App">
        <h1>React Access Control</h1>
        {!user ? (<Login handleLogin={handleLogin}/>) : (<Dashboard />)}
        <AccessControl>
          <StatsPanel />
        </AccessControl>
    </div>
  );
}

export default App;
