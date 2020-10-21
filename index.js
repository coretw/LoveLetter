#!/usr/bin/env node
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 8443;
const log = require('simple-node-logger').createSimpleFileLogger('/var/log/node/node.log');

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


io.on('connection', socket => {

    console.log('A new user has joined the chat')

    socket.emit('checkSocket', socket.id);
})

