import React, {Component} from "react";
import "./App.css";

// react class component Hello
class Hello extends Component {
    render(){
        return (
            <div> 
                <p>
                    Grand Rising! My name is John Anthony and my temporary moniker is codingByanthony. This is my react functional component
                </p>
                <p>
                    It seems that while using react version 18, the class component does not render. Moving forward I will continue to use
                    the functional component while continue to practice class components.
                </p>
                <p>
                    <h1>To make make a class component, you have to follow the steps outlined below</h1>
                    <ol>
                        <li>First you need to run npm install. This creates the react app environment you will be working in.</li>
                        <li>Once npm is installed, be sure to test it bur running npm run start to make sure all package.json script calls work.</li>
                        <li>In the very top of your files, import React from react. In the same line import React, Component from react. (remember to add curly braces around the component keyword and a comma after react to make sure it grans both keyword imports from the react library.) </li>
                        <li>Once you have the beginning of your file start, add the render() method</li>
                        <li>Inside of the render() method, add the return() method. Inside return is where you will wrap your JSX syntax inside a parent JSX element. div for example, or a p element will work as well. Most element tags will work </li>
                        <li>Once you have the JSX you wish to use, export default [name of component] to make sure it is available to be called in your root element DOM file</li>
                    </ol>
                </p>
            </div>
        )
    }
}
export default Hello;