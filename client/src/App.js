import React, { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  const [ user, setUser] =useState('');

  const handleLogin = () => setUser('user');
  return (
    <div className="App">
      <h1>React Access Control</h1>
      {!user ? (<Login handleLogin={handleLogin}/>) : (<Dashboard />)}
    </div>
  );
}

export default App;
