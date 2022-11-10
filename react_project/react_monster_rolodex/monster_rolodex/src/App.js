// import logo from './logo.svg';
import './App.css';

import {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {monster: [], searchField: ''};
    console.log('constructor');
  }
  // 1. [line 11] initialize the state as an empty array
  // 2. get the list of users
  // 3. when do I get the list ???
  // 4. how do I get the list ???
  // 5. where do I put the list ??? >> you get the list from this.state

  // REACT LIFECYCLE methods: componentDidMount: whatever you write here is when
  // the component mounts/renders Promise: a promise to eventually have a value
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(
            (users) => this.setState(
                () => {
                  // using a function method to return object points to users
                  return {
                    monster: users
                  }
                },
                // callback for this.state
                () => {console.log(this.state)}));
  }

  render() {
    console.log('render')

    const filteredMonsters = this.state.monster.filter((monsters) => {
      return monsters.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
      <input
    className = 'search-box'
    type = 'search'
    placeholder = 'search monsters'
        onChange={
      (event) => {
        console.log(event.target.value)
        // cast lowercase into a variable
        const searchField = event.target.value.toLocaleLowerCase();

        this.setState(() => {
          return {
            searchField
          }
        })
      }} />
        {filteredMonsters.map((monsters)=>{
          return(
            <div key={monsters.id}>
              <h1>{monsters.name}</h1>
            </div>
            )})}
      </div>
    )
  }
}

export default App;
