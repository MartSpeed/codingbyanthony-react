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

// have the server listen for a port
server.listen(3001, () => {
    console.log("SERVER IS RUNNING, YOU SHOULD CATCH IT")
})