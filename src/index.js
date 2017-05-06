import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Todo from './pages/Todo';
import './index.css';
import { Router, Route } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

const routes = (
    <Router history={ createBrowserHistory() }>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/todo" component={Todo}/>
        </div>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('main')
);
