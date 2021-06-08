import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Desk from './Desk/Desk';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <main className='screen'>
                    <Header/>
                    <div className='welcome-screen'>
                        <div className='welcome-screen__bg ibg'>
                            <img src='../../../public/img/bg_main.jpg' alt=''/>
                        </div>
                    </div>
                    <div className='content'>
                        <div id='create'>
                            <Desk/>
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

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);


//=============================================================================================
// user interface function
function ibg() {
    let ibgElements = document.getElementsByClassName('ibg');

    for (let element of ibgElements) {
        for (let childrenItem of element.children) {
            if (childrenItem.localName === 'img') {
                element.style.backgroundColor = '#000';
                element.style.backgroundImage = 'url("' + childrenItem.attributes.src.nodeValue + '")';
            }
        }
    }
}

ibg();
