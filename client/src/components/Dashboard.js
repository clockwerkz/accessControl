import React from 'react';

const Dashboard = ({user, handleLogout}) => {
    return (
        <div className="dashboard">
            <h1>Welcome, {user}</h1>
            <button className="btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;