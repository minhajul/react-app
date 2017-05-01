
import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component{
    render(){
        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills pull-right custom-nav">
                        <li role="presentation" className="active"><a href="#">Home</a></li>
                        <li role="presentation"><a href="#">About</a></li>
                        <li role="presentation"><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <h3 className="text-muted">
                    <img src={logo} className="App-logo" alt="logo" />
                </h3>
            </div>
        )
    }
}


export default Header;