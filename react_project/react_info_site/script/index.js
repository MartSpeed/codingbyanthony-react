function Header(){
    return (
        <nav>
            <h1>coding<span id="title-el">BY</span>anthony</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

// why can the render method only do one DOM element at a time?
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Header />);
