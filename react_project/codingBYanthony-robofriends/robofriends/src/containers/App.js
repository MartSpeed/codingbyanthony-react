import React, { Component } from "react";
import "../containers/App.css";
import "../index.css";
import Header from "../Header";
import ROBOFRIENDS_HEADER from "../ROBOFRIEND_HEADER";
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "../robots";

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
        const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
        <h1 className="sega_font f1">Loading</h1> :
        (
            <div className="tc">
                <Header />
                <ROBOFRIENDS_HEADER />
                <SearchBox searchChange={this.search}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;