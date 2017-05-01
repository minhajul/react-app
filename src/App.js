import React, { Component } from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from './Footer';
import Blog from "./Blog";

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header/>
            <div className="col-md-12">
                <Content/>
            </div>
            <div className="col-md-12">
                <Blog/>
            </div>
            <div className="col-md-12">
                <Footer/>
            </div>
        </div>
    );
  }
}

export default App;
