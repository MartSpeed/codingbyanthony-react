import './App.css';
import io from 'socket.io-client';

// use this to emit or listen to events
const socket = io.connect("http://localhost:3001");



function App () {
    
    const sendMessage = () => {
        // emit message to someone or something
        socket.emit("send_message", {message: "I like going to the skatig rink, its one of my favorite activities."})

    }; // called when button is clicked

    // setup the connection to our socket.io server on the backend


    return (
        
        <div className="App">

            <input placeholder="Message...">

            </input>

            <button onClick={sendMessage}> Send Message </button>

        </div>
    );
}

export default App;