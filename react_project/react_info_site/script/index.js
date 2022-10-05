function Header(){
    return (
        <header>
            <nav>
                <li>this is an image for my page</li>
            </nav>
        </header>
    )
}

function Page(){
    return (
        <div>
            <Header />
                <h1>coding<span id="title-el">BY</span>anthony</h1>
            
            <h2>Why I am excited to learn React</h2>
            <ol>
                <li>I want to host my own website and ideas</li>
                <li>I want to build a website to host my games</li>
                <li>I want to build a website for my rental properties</li>
                <li>I want to build website for large scale companies</li>
                <li>I want to learn to turn my imagination into reality using code</li>
            </ol>

            <footer>"© 2022 Anthony development. All right reserved"</footer>
        </div>
    );
}

// why can the render method only do one DOM element at a time?
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
<Page />
);
