import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      name: {firstname: 'John', lastname: 'Anthony'},
      company: 'codingBYanthony'
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, my name is {this.state.name.firstname} {this.state.name.lastname} and I work for {this.state.company}
          </p>
          <button onClick={() => {
            this.setState({name: {firstname: 'Albedo', lastname: 'Palazzo'}, company: 'The Nines'});
            console.log(this.state)
          }}>
            Change Name
          </button>
        </header>
      </div>
    )
  }
}

export default App;
