// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import { useState, useEffect } from 'react';

// A. function component

const App = () => {
  // useState gives back an array of 2 values
  // assign variables to values inside of an array
const [searchField, setSearchField] = useState(''); // [value, setValue]
const [monsters, setMonsters] = useState([]);
const [filteredMonsters, setFilteredMonsters] = useState(monsters);

// useEffect takes 2 arguments 
/*
  1. a callback function: toe code or the effect that we want to happen inside of our functional component
  2. an array of dependencies: state values or prop values. whenever any of the values inside of this
  dependency array change is when I am going to run this call back function 
*/
useEffect(() => {
  fetch('https://jsonplacehodler.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users)
  );
}, []);

useEffect(() => {
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilteredMonsters(newFilteredMonsters);
}, [monsters, searchField])

// this is not the way you want to fetch in a functional component
// fetch('https://jsonplacehodler.typicode.com/users')
//   .then((response) => response.json)
//   .then((users) => setMonsters(users)
//   );

const onSearchChange = (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
};

// const filteredMonsters = monsters.filter((monster) => {
//   return monster.name.toLocaleLowerCase().includes(searchField);
// });

  return (
    <div className='App'>    
      <h1 className="app-title">Monster Holodeck</h1>
      
      <SearchBox
        className='monsters-search-box'            
        placeHolder='search monsters...'
        onChangeHandler={onSearchChange}
        />
      
      <CardList monsters={filteredMonsters}/>
    
    </div>
  )
}

// B. class component
// ================================================================================
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {monster: [], searchField: ''};
//   }

//   // REACT LIFECYCLE methods: componentDidMount: whatever you write here is when
//   // the component mounts/renders Promise: a promise to eventually have a value
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then(
//             (users) => this.setState(
//                 () => {
//                   // using a function method to return object points to users
//                   return {
//                     monster: users
//                   }
//                 }
//             ))
//   }

//   // Optimization to store the method instead of using it as an anonymous function
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   };

//   render() {
//     // console.log('inside of App js');

//     const { monster, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monster.filter((monsters) => {
//       return monsters.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//       <h1 className="app-title">Monster Holodeck</h1>
//         <SearchBox
//           className='monsters-search-box'            
//           placeHolder='search monster...'
//           onChangeHandler={onSearchChange}
//           />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     )
//   }
// }

export default App;
