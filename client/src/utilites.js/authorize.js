export const checkPermissions = (userPermissions, allowedPermissions) => {
    if (!userPermissions || !allowedPermissions) return false;
    let allowed = false;
    userPermissions.forEach(level => {
        if (!allowed && allowedPermissions.indexOf(level)!==-1) {
            allowed = true;
        }
    })
    return allowed;
};

export const userLevels = {
    plantManager : ['read:stats', 'control:reactor', 'control:emergencyAlert'],
    safetyInspector : ['read:stats']
}


export const permissionLevels = {
    StatsPanel: ['read:stats'],
    ReactorControls: ['control:reactor'],
    EmergencyCommunications: ['control:emergencyAlert']
}