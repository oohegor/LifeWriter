import React from 'react';
import {Link} from "react-router-dom";

function Header()
{
    return (
        <div className="header">
            <div className="header__row">
                <nav className="header__menu menu">
                    <div className="menu__body">
                        <ul className="menu__list">
                            <li><a href="#create" className="menu__link">create</a></li>
                            <li><a href="#contact" className="menu__link">contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="header__logo">
                    {/*didn't work without BrowserRouter and on the contrary*/}
                    <Link to={"/"}><img src="../../../public/img/typewriter.png" alt=""/></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
