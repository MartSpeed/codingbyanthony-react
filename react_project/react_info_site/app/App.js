import Header from "../components/Header.js";
import Content from "../components/Content"
import Footer from "../components/Footer"

function Page(){
    return (
        <div>
            <Header />
            <Content />
            <Footer />            
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
<Page />
);
