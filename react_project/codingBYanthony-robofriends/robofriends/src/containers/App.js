import React, { useState, useEffect } from "react";
import "../containers/App.css";
import "../index.css";
import Header from "../Header";
import ROBOFRIENDS_HEADER from "../ROBOFRIEND_HEADER";
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "../robots";

export default function App() {

    const [robots, setRobots] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> {setRobots(users)});
    }, [])

    // state function for searchBox
    const onSearch = (event) => {
        setSearch(event.target.value);
    }
    
    const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(search.toLowerCase());
    })
    
    return !robots.length ? 
    <h1 className="sega_font f1">Loading</h1> :
    (
        <div className="tc">
            <Header />
            <ROBOFRIENDS_HEADER />
            <SearchBox searchChange={onSearch}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    );
}
