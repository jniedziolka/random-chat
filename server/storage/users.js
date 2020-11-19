const users = {

};

const usersQueue = {

}

const addNewUser = (id, name, country, socket) => {
    const user = {
        id,
        name,
        country,
        socket
    }

    users[id] = user;

    return user;
}

const removeUser = id => {
    delete users[id];
};

const findUser = id => Object.values(users).find(user => user.id === id);

const addUserToQueue = (user) => {
    usersQueue[user.id] = user;
};

const removeUserFromQueue = (user) => {
    delete usersQueue[user.id];
}

const findUserInQueue = (id, country) => Object.values(usersQueue).find(user => user.id !== id && user.country === country);

module.exports = {
    addNewUser,
    removeUser,
    findUser,
    addUserToQueue,
    removeUserFromQueue,
    findUserInQueue
}