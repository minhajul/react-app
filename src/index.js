import React from 'react'
import ReactDOM from 'react-dom'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Todo from './components/pages/Todo'
import { BrowserRouter, Route } from 'react-router-dom'
import Config from './config/firebase-config'
import * as firebase from 'firebase'
import Details from "./components/pages/Details"
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Home from "./components/pages/Home";

firebase.initializeApp(Config);

const store = configureStore();

const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/blog/:id" component={Details}/>
                <Route exact path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/todo" component={Todo}/>
                <Route path="/login" component={Login}/>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    routes,
    document.getElementById('main')
);
