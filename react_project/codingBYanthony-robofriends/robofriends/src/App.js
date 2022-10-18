import Header from "./Header";
import ROBOFRIENDS_HEADER from "./ROBOFRIEND_HEADER";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from "./robots"
import React from "react";

const App = () => {
    return(
        <React.Fragment>
            <Header />
            <ROBOFRIENDS_HEADER />
            <SearchBox />
            <CardList robots={robots}/>
        </React.Fragment>
    );
}

export default App;