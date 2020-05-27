import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {

    return (
        <div className="navbar">
            <h1>VRMS</h1>
            <Link to="/projects">Projects</Link>
        </div>
    )
}

export default NavBar;