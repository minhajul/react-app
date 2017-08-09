import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <nav>
                <ul className="nav nav-pills pull-right custom-nav">
                    <li role="presentation"><NavLink exact activeClassName="active" to="/">HOME</NavLink></li>
                    <li role="presentation"><NavLink activeClassName="active" to="/about">ABOUT</NavLink></li>
                    <li role="presentation"><NavLink activeClassName="active" to="/contact">CONTACT</NavLink></li>
                    <li role="presentation"><NavLink activeClassName="active" to="/todo">TODO</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;