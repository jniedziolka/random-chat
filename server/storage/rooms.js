const rooms = {

};

const createRoom = (user, pairedUser) => {
    rooms[user.id + '.' + pairedUser.id] = {
        id: user.id + '.' + pairedUser.id,
        user1: user,
        user2: pairedUser
    };

    return user.id + '.' + pairedUser.id;
}

const deleteRoom = (user, pairedUser) => {
    delete rooms[user.id + '.' + pairedUser.id];
    delete rooms[pairedUser.id + '.' + user.id];
}

const getUserRoom = user => Object.values(rooms).find(room => room.user1.id === user.id || room.user2.id === user.id);

module.exports = {
    createRoom,
    deleteRoom,
    getUserRoom
}