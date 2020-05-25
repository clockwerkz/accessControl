import React from 'react';

const Dashboard = ({user, userLevels=[], handleLogout}) => {
    return (
        <div className="dashboard">
            <h3 className="dashboard__title">Welcome, <span className="dashboard__title-highlight">{user}</span></h3>
            <p className="dashboard__description">You have the following permissions:</p>
            <ul className="dashboard__permission-list">
                {userLevels.map((level, key)=> (<li className="dashboard__permission" key={key}>{level}</li>))}
            </ul>
            <button class="btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;