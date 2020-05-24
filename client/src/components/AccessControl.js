import React from 'react';

import NoAccess from './NoAccess';

import { checkPermissions } from '../utilites.js/authorize';

const AccessControl = ({userPermissions, allowedPermissions, children, renderNoAccess}) => {
    let permitted = checkPermissions(userPermissions, allowedPermissions);
    if (permitted) {
        return (
            {...children}
        )
    } else {
        return renderNoAccess();
    }
}


export default AccessControl;