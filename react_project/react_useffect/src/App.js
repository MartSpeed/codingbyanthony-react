import './App.css';
import React, { useState, useEffect } from 'react'

// function countInitial() {
//   console.log( 'run function' )
//   return 4
// }

export default function App() {
  // const [ count, setCount ] = useState(4);
  // // also takes a function version
  // const [ theme, setTheme ] = useState('blue');

  // function decrementCount(){
  //   setCount( prevCount => prevCount -1 )
  // }

  // function incrementCount(){
  //   setCount( prevCount => prevCount + 1 )
  //     }

  // return (
  //   <div className="App">

  //   <button onClick={ decrementCount }> - </button>
  //   <span> { count } </span>
  //   <span> { theme } </span>
  //   <button onClick={ incrementCount }> + </button>
  //   </div>
  // );

const [ resourceType, setResourceType ] = useState('posts')
// const [ items, setItems ] = useState([])

useEffect(() => {
  // everything inside of this callback function will be called everytime the program renders
  // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //   .then(response => response.json())
  //   .then(json => setItems(json))

  console.log( 'resource changed' )

  return () => {
    console.log( 'return from resource changed' )
  }
}, [resourceType])

  return (
    <div>
      <button onClick={() => setResourceType('posts')}> Post </button>
      <button onClick={() => setResourceType('users')}> User </button>
      <button onClick={() => setResourceType('comments')}> Comments </button>
      <h1> { resourceType } </h1>
    </div>
  )
}
