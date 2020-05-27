import React from 'react';

const ProjectMember = ({ id }) => {
    return (
        <div className="project-member">
            <h2>Project {id}</h2>
            <p>List of Options for a project member</p>
        </div>
    )
}

const ProjectManager = ({ id }) => {
    return (
        <div className="project-manager">
            <p>List of Options for a project manager</p>
        </div>
    )
}


const ProjectDashboard = ({ project }) => {
    if (project) {
        let [id, level] = project.split(':');
        level = parseInt(level);
        return (
            <div className="project-dashboard">
                {level >= 100 ? (<ProjectMember id={id}/>):("")}
                {level >= 300 ? (<ProjectManager id={id}/>):("")}
            </div>
        )
    } else {
        return (<div>No Project</div>)
    }
}

export default ProjectDashboard;