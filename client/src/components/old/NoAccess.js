import React from 'react';

const NoAccess = ({ permissionsNeeded }) => {
    return (
        <div className="no-access">
            <p className="no-access__message">Unauthorized -- You need the following permissions: <span className="no-access__permissions">{permissionsNeeded}</span></p>
        </div>
    )
}


export default NoAccess;