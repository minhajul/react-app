import React, { Component } from 'react';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
class Header extends Component{
    render(){
        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills pull-right custom-nav">
                        <li role="presentation"><NavLink exact activeClassName="active" to="/">HOME</NavLink></li>
                        <li role="presentation"><NavLink activeClassName="active" to="/about">ABOUT</NavLink></li>
                        <li role="presentation"><NavLink activeClassName="active" to="/contact">CONTACT</NavLink></li>
                        <li role="presentation"><NavLink activeClassName="active" to="/todo">TODO</NavLink></li>
                    </ul>
                </nav>
                <h3 className="text-muted">
                    <a href="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                </h3>
            </div>
        )
    }
}


export default Header;