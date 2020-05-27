const db = {
    'projectMember':{
        email: 'johnsmith@gmail.com',
        name: 'John Smith',
        projects: ['1:100', '2:100'],

    },
    'projectManager':{
        email: 'sallyjohnson@gmail.com',
        name: 'Sally Johnson',
        projects: ['1:300']
    }
}

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
            return db[level] ? resolve(db[level]) : reject('User not found');
        },500);
    });
}