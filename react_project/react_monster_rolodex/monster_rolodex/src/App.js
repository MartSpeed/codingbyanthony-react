// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {monster: [], searchField: ''};
  }
  // 1. [line 11] initialize the state as an empty array
  // 2. get the list of users
  // 3. when do I get the list ???
  // 4. how do I get the list ???
  // 5. where do I put the list ??? >> you get the list from this.state

  // REACT LIFECYCLE methods: componentDidMount: whatever you write here is when
  // the component mounts/renders Promise: a promise to eventually have a value
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(
            (users) => this.setState(
                () => {
                  // using a function method to return object points to users
                  return {
                    monster: users
                  }
                }
            ))
  }

  // Optimization to store the method instead of using it as an anonymous function
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    });
  };

  render() {
    // console.log('inside of App js');

    const { monster, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monster.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder='search monster...'
          className='search-box'            
          />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
