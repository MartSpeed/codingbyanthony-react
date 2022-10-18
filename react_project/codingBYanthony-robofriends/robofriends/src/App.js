import Header from "./Header";
import ROBOFRIENDS_HEADER from "./ROBOFRIEND_HEADER";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from "./robots"
import React, { Component } from "react";
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }

    // function for searchBox functionality
    search = (event) => {
        this.setState({searchfield : event.target.value});
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    }

    render() {
        return(
            <div className="tc">
                <Header />
                <ROBOFRIENDS_HEADER />
                <SearchBox searchChange={this.search}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;