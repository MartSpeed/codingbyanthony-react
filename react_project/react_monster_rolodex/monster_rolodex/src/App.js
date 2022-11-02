import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monster:[],
    }
  }
  // 1. [line 11] initialize the state as an empty array
  // 2. get the list of users
  // 3. when do I get the list ??? 
  // 4. how do I get the list ???
  // 5. where do I put the list ??? >> you get the list from this.state
  
  // REACT LIFECYCLE methods: componentDidMount: whatever you write here is when the component mounts/renders
  // Promise: a promise to eventually have a value
  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState( () => {
      // using a function method to return object points to users
      return {monster: users}
    },
    // callback for this.state
    () => {
      console.log(this.state)
    }
    ));
  }

  render(){
    return (
      <div className="App">
      {
        this.state.monster.map((monsters)=>{return(<div key={monsters.id}><h1>{monsters.name}</h1></div>)})
      }
      </div>
    )
  }
}

export default App;
