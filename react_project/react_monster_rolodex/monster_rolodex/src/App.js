import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monster:[
        {
          name:'Albedo'
        },
        {
          name:'Oda'
        },
        {
          name:'PowerHawk'
        },
        {
          name:'Mugiwara'
        }      
      ]
    }
  }

  render(){
    return (
      <div className="App">
      {
        this.state.monster.map((monsters)=>{return(<h1>{monsters.name}</h1>)})
      }
      </div>
    )
  }
}

export default App;
