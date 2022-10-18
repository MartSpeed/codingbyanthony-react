import Header from "./Header";
import CardList from "./CardList";
import {robots} from "./robots"
import React from "react";

const App = () => {
    return(
        <React.Fragment>
            <Header />
            <CardList robots={robots}/>
        </React.Fragment>
    );
}

export default App;