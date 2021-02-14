import React from 'react';
import {NavLink as NavigationLink, Link} from "react-router-dom";

const NavLink = (props) => {
    return (
        <NavigationLink to={props.href} className={"menu__link"}
                        activeClassName="menu__link_active">{props.linkName}</NavigationLink>
    );
}

function Header()
{
    return (
        <div className="header-container">
            <div className="header">
                <div className="header__row">
                    <nav className="header__menu menu">
                        Header example and menu
                        <div className="menu__body">
                            <ul className="menu__list">
                                <li><NavLink href={"/write"} linkName={"write"}/></li>
                                <li><NavLink href={"/read"} linkName={"read"}/></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header__logo"><Link to={"/#"}><img src="" alt=""/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
