import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ReactDOM from "react-dom";

function App()
{
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="page">
                    <Header/>
                    <div className="content">
                        Hello world - body example
                    </div>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('main')) {
    ReactDOM.render(<App/>, document.getElementById('main'));
}
