import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Paper from "./Paper";
import ReactDOM from "react-dom";
import $ from 'jquery';

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <main className="page">
                    <Header/>
                    <div className="main-screen">
                        <div className="main-screen__bg ibg">
                            <img src="../../../public/img/bg_main.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="content">
                        <div id='create'>
                            <Paper/>
                        </div>
                        <div id='contact'>
                            <Footer/>
                        </div>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}


//=============================================================================================
// user interface function
function ibg()
{
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-color', '#000');
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();
