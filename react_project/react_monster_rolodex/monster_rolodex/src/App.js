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
          className='monsters-search-box'            
          placeHolder='search monster...'
          onChangeHandler={onSearchChange}
          />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
