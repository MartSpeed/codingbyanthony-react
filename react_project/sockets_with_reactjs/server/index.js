const express = require('express'); // express server
const app = express(); // create backend server
const http = require('http'); // http library
const { Server } = require("socket.io")
const cors = require("cors");

/** 
 * set up the project so that we can accept cors
 * cors:
 */
app.use(cors());

const server = http.createServer(app); // this is how you create a server in express

/* 
    variable used to relate anything to socket.io in our backend
    this will allow of to work with socket.io
*/
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // url for our front end
        methods: ["GET", "POST"], // what sort of methods are we accepting
    },
})

// listen to some events
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    // listen to an event called send_message
    // return some data and a callback function that will receive this data
    socket.on("send_message", (data) => {
        // instead of logging this, we want to emit this back to everyone who is connected to the server
        // console.log(data) 
        // broadcast allows you to emit something to everyone except for yourself
        // event called receive_message, receives all the messages sent by other people
        socket.broadcast.emit("receive_message", data)
    })
})


// have the server listen for a port
// run npm start to launch server
server.listen(3001, () => {
    console.log("SERVER IS RUNNING, YOU SHOULD CATCH IT")
})