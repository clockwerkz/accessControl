export const checkPermissions = (userPermissions=[], allowedPermissions=[]) => {
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