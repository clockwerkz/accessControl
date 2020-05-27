import React from 'react';
import ProjectList from './ProjectList';


const Dashboard = ({user, handleLogout}) => {
    return (
        <div className="dashboard">
            <h1>Welcome, {user.name}</h1>
            <button className="btn" onClick={handleLogout}>Logout</button>
            {user.projects && user.projects.length > 0 ? (<div>
                <ProjectList projects={user.projects}/>
            </div>):
            (<p>Check out our List of Projects and sign up!</p>)}
        </div>
    )
}

export default Dashboard;