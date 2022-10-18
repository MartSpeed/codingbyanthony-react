import Header from "./Header";
import ROBOFRIENDS_HEADER from "./ROBOFRIEND_HEADER";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from "./robots"
import React, { Component } from "react";

const state = {
    robots: robots,
    searchfield: ""
}
class App extends Component {
    render() {
        return(
            <div className="tc">
                <Header />
                <ROBOFRIENDS_HEADER />
                <SearchBox />
                <CardList robots={robots}/>
            </div>
        );
    }
}

export default App;