import React from 'react';

const Dashboard = ({handleLogout}) => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <button class="btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;