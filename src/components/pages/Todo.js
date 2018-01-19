import React, { Component } from 'react';
import Header from "../partials/Header";
import TodoList from "../partials/TodoList";
import {TodoForm} from "../partials/TodoForm";
import Footer from "../partials/Footer";
import * as firebase from 'firebase';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/actionCreator';


class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            item : '',
            loading : true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const todos = [];
        const todoRef = firebase.database().ref('todos');
        todoRef.on('child_added', snapshot => {
            let todo = {
                id: snapshot.key,
                name: snapshot.val().name,
                is_complete: snapshot.val().is_complete,
            };
            todos.push(todo);
            this.setState({
                todos: todos,
                loading: false
            });
        });
    }

    handleChange(event){
        this.setState({
            item : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const todoRef = firebase.database().ref('todos');
        todoRef.push({
            name : this.state.item,
            is_complete : true
        });
        this.setState({
            item : '',
        })
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="col-md-12">
                    <div className="todo-list">

                        <TodoList
                            loading={this.state.loading}
                            todos={this.state.todos}
                        />

                        <TodoForm
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            item={this.state.item}
                        />

                        <h2>{JSON.stringify(this.props.test)}</h2>

                    </div>
                </div>
                <div className="col-md-12">
                    <Footer/>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        test: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Todo);

