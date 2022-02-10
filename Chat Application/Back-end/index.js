const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require("path");
const http = require('http');
const server = http.createServer(app);

const socketio = require("socket.io");
const io = socketio(server);

const message = require('./routes/message.route');
const user = require('./routes/user.route');

mongoose.connect('mongodb://localhost:27017/chat_application').then((success) => {
    console.log('Successfully connected to database');
}).catch((error) => {
    console.log(error);
    process.exit(1);
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/message', message);
app.use('/User', user);

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/Front-end/home.html');
// });

io.on('connection', (socket) => {
    io.emit("newconnection", "A new user joined");
    socket.emit('message', 'Welcome to ')
    socket.on('disconnect', function () {
        io.emit("disconnect", "A user has disconnect");
        console.log('A client disconnected');
    });

    socket.on("newmessage", function (message) {
        console.log(message)
        io.emit("message", message)
    })
})


server.listen(3000, () => { console.log('Server Listening on port 3000'); })

module.exports = app;
