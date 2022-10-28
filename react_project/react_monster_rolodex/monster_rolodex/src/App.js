import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monster:[
        {
          name:'Albedo',
          id: '1'
        },
        {
          name:'Oda',
          id: '2'
        },
        {
          name:'PowerHawk',
          id: '3'
        },
        {
          name:'Mugiwara',
          id: '4'
        }      
      ]
    }
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
