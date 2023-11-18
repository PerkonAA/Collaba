const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:8080', 'http://127.0.0.1:5173/']
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
    });

    socket.on('join', (roomName) => {
        const rooms = io.sockets.adapter.rooms;
        const room = rooms.get(roomName);

        if (room == undefined) {
            socket.join(roomName);
            socket.emit("created");
        } else if (room.size == 1) {
            socket.join(roomName);
            socket.emit("joined");
        } else {
            socket.emit('full');
        }
    })

    socket.on('ready', (roomName) => {
        socket.broadcast.to(roomName).emit('ready')
    })

    socket.on('candidate', (candidate, roomName) => {
        console.log('candidate')
        console.log(candidate)
        socket.broadcast.to(roomName).emit('candidate', candidate)
    })

    socket.on('offer', (offer, roomName) => {
        console.log('offer')
        console.log(offer)
        socket.broadcast.to(roomName).emit('offer', offer)
    })

    socket.on('answer', (answer, roomName) => {
        console.log('answer')
        socket.broadcast.to(roomName).emit('answer', answer)
    })

    socket.on('leave', function (roomName) {
        console.log('leave')
        socket.leave(roomName)
        socket.broadcast.to(roomName).emit('leave')
    })
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});