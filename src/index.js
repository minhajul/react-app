import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/partials/App';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Todo from './components/pages/Todo';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import Config from './config/firebase-config';
import * as firebase from 'firebase';

firebase.initializeApp(Config);

const routes = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/todo" component={Todo}/>
            <Route path="/login" component={Login}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(
    routes,
    document.getElementById('main')
);

registerServiceWorker();
