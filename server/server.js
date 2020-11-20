const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});
const cors = require('cors');
const port = process.env.PORT || 5000;

const { addNewUser, setUserData, removeUser, addUserToQueue, removeUserFromQueue, findUserInQueue } = require('./storage/users');
const { createRoom, deleteRoom, getUserRoom } = require('./storage/rooms');

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

io.on('connection', socket => {
    const user = addNewUser(socket.id, '', '', socket);

    socket.on('findPairStart', ({ name, country }) => {
        setUserData(user.id, name, country);
        const pairedUser = findUserInQueue(user.id, country);

        if(pairedUser) {
            removeUserFromQueue(pairedUser);
            const roomId = createRoom(user, pairedUser);
            user.socket.join(roomId);
            pairedUser.socket.join(roomId);
            io.in(roomId).emit('findPairSuccess', roomId);
        } else {
            addUserToQueue(user);
        }
    });

    socket.on('message', ({ author, text }) => {
        const room = getUserRoom(user);
        socket.to(room.id).emit('message', { author, text });
    });

    socket.on('leaveRoom', () => {
        const room = getUserRoom(user);
        removeUserFromQueue(user);
        if(room) {
            socket.emit('userLeft', 'You have left the room.');
            socket.to(room.id).emit('userLeft', 'User has left the room.');
            room.user1.socket.leave(room.id);
            room.user2.socket.leave(room.id);
            deleteRoom(room.user1, room.user2);
        }
    });

    socket.on('disconnect', () => {
        const room = getUserRoom(user);
        if(room) {
            socket.to(room.id).emit('userLeft', 'User has left the room.');
            room.user1.socket.leave(room.id);
            room.user2.socket.leave(room.id);
            deleteRoom(room.user1, room.user2);
        }
        removeUserFromQueue(user);
        removeUser(user);
    });
});

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});