import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react'

// use this to emit or listen to events
const socket = io.connect("http://localhost:3001");



function App () {
    // Room State
    const [room, setRoom] = useState("");

    // Message states
    const [message, setMessage] = useState("");
    // grabs whatever the user is typing in the input
    const [messageReceived, setMessageReceived] = useState(""); 

    const joinRoom = () => {
        if(room !== ""){
            socket.emit("join_room", room); 
        }
    };
    
    const sendMessage = () => {
        // emit message to someone or something
        socket.emit("send_message", { message, room })
    }; // called when button is clicked

    // setup the connection to our socket.io server on the backend

    // function that will run, any time an event is thrown to us on the socket.io server
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message)
        })
    })
    return (
        
        <div className="App">
            <input
                placeholder="Room Number..."
                onChange={(event) => {
                    setRoom(event.target.value);
                }}
                ></input>
            <input 
                placeholder="Message..." 
                onChange={(event) => {
                    setMessage(event.target.value);
                }}>

            </input>

            <button
                onClick={joinRoom}> Join Room </button>

            <button onClick={sendMessage}> Send Message </button>
            <h1>Message:</h1>
            { messageReceived }
        </div>
    );
}

export default App;