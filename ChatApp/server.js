
const express = require('express');
const http = require('http');
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server,{
    cors: {
        origin: "*"
      }
});

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on('send-message', message =>{
        console.log(message)
        io.emit('receive-message', message,socket.id);
    });
});

server.listen(5000,()=>{
    console.log('server is up and running on port 5000');
})