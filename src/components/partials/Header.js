import React, { Component } from 'react';
import logo from '../../logo.svg';
import NavBar from "./NavBar";

class Header extends Component{
    render(){
        return (
            <div className="header clearfix">
                <NavBar />
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