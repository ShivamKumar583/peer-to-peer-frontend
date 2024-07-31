// server.js

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Adjust this to allow specific origins
        methods: ["GET", "POST"]
    }
});

app.use(cors());

io.on('connection', (socket) => {
    console.log('server is connected');

    socket.on('join-room', (roomId, userId) => {
        console.log(`a new user ${userId} joined room ${roomId}`);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-connected', userId);
    });

    socket.on('user-toggle-audio', (userId, roomId) => {
        socket.broadcast.to(roomId).emit('user-toggle-audio', userId);
    });

    socket.on('user-toggle-video', (userId, roomId) => {
        socket.broadcast.to(roomId).emit('user-toggle-video', userId);
    });

    socket.on('user-leave', (userId, roomId) => {
        socket.broadcast.to(roomId).emit('user-leave', userId);
    });
});

const routes = require('./routes/index');
app.use('/api', routes);


app.get('/', (req, res) => {
    res.send('Server is running...');
});

require('dotenv').config()

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
