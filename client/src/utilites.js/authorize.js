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

export const login = (level) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            return level ? resolve(level) : reject('Invalid user');
        },500);
    });
}