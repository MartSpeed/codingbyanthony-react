import React from "react"
import Main from "../src/components/Main"
import Nav from "../src/components/Navbar"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import "./App.css"

export default function App(){
    return(
        <div className="container">
            <Nav />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}