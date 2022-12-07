import './App.css';
import React, { useState } from 'react'

// function countInitial() {
//   console.log( 'run function' )
//   return 4
// }


function App() {
  const [ count, setCount ] = useState(4);
  // also takes a function version
  const [ theme, setTheme ] = useState('blue');

  function decrementCount(){
    setCount( prevCount => prevCount -1 )
  }

  function incrementCount(){
    setCount( prevCount => prevCount + 1 )
      }

  return (
    <div className="App">

    <button onClick={ decrementCount }> - </button>
    <span> { count } </span>
    <span> { theme } </span>
    <button onClick={ incrementCount }> + </button>
    </div>
  );
}

export default App;
