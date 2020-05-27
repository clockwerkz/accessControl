import React from 'react';
import ProjectDashboard from './ProjectDashboard';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list">
            <h2>My projects</h2>
            {projects.map((project, key)=> (
                <div key={key}>
                    <ProjectDashboard project={project} />
                </div>
            ))}            
        </div>
    )
}

export default ProjectList;