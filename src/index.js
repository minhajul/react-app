import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/partials/App';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Todo from './components/pages/Todo';
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
