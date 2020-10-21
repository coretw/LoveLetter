#!/usr/bin/env node
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const web_port = 3000;
const socket_port = 3001;
const log = require('simple-node-logger').createSimpleFileLogger('/var/log/node/node.log');




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(web_port, () => {
    console.log(`Example app listening at http://localhost:${web_port}`)
})