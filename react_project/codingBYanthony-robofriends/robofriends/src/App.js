import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Header from "./Header";
import ROBOFRIENDS_HEADER from "./ROBOFRIEND_HEADER";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

// smart components have a state component that manipulates information

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robots: users}));       
    }

    // state function for searchBox functionality
    search = (event) => {
        this.setState({searchfield : event.target.value});
    }

    render() {
    const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1 className="sega_font f1">Loading</h1>
        }else{
            return(
                <div className="tc">
                    <Header />
                    <ROBOFRIENDS_HEADER />
                    <SearchBox searchChange={this.search}/>
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    }
}

export default App;