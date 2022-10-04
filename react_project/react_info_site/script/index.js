function Header(){
    return (
        <p>
            <h1>coding<span id="title-el">BY</span>anthony</h1>            

            <h3>react info site</h3>

            <br></br>

            <p>why does it only take a single element?</p>

            <p>it seems you have to set up the DOM like a document to be called but it has to be wrapped in an HTML element</p>
        </p>
    );
}

// why can the render method only do one DOM element at a time?
ReactDOM.render(
        <Header />,
    document.querySelector("#root")
    );
