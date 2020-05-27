import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';
const arr = [
    {   id: 1,
        name: "Project 1"
    },
    {   id: 2,
        name: "Project 2"
    },
    {   id: 3,
        name: "Project 3"
    },
    {   id: 4,
        name: "Project 4"
    },
]

const Projects = ({ projects = arr }) => {
    return (
        <div className="projects-page">
            <div className="projects">
                {projects && projects.length > 0 ? (projects.map((project, key)=><Project key={key} name={project.name} />))
            :("")}
            </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Projects;