
import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component{
    render(){
        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills pull-right custom-nav">
                        <li role="presentation" className="active"><a href="/">Home</a></li>
                        <li role="presentation"><a href="/about">About</a></li>
                        <li role="presentation"><a href="/contact">Contact</a></li>
                        <li role="presentation"><a href="/todo">To Do</a></li>
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