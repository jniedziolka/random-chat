const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});
const cors = require('cors');
const port = 3001;

const { addNewUser, removeUser, addUserToQueue, removeUserFromQueue, findUserInQueue } = require('./storage/users');
const { createRoom, deleteRoom, getUserRoom } = require('./storage/rooms');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

io.on('connection', (socket) => {
    console.log(`An user with id ${socket.id} has connected`);
    const user = addNewUser(socket.id, 'test', 'test', socket);

    socket.on('findPairStart', () => {
        console.log(`An user with id ${socket.id} is looking for a pair`);
        const pairedUser = findUserInQueue(user.id, user.country);

        if(pairedUser) {
            removeUserFromQueue(pairedUser);
            const roomId = createRoom(user, pairedUser);
            console.log(`Created room with name ${roomId}`);
            socket.join(roomId);
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
        if(room) {
            socket.emit('userLeft', 'You have left the room.');
            socket.to(room.id).emit('userLeft', 'User has left the room.');
            room.user1.socket.leave(room.id);
            room.user2.socket.leave(room.id);
            deleteRoom(room.user1, room.user2);
        }
    });

    socket.on('disconnect', () => {
        console.log(`An user with id ${socket.id} has disconnected`);
        const room = getUserRoom(user);
        if(room) {
            socket.to(room.id).emit('userLeft');
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