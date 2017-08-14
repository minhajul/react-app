import React, { Component } from 'react';
import Header from "../partials/Header";
import TodoList from "../partials/TodoList";
import {TodoForm} from "../partials/TodoForm";
import Footer from "../partials/Footer";
import * as firebase from 'firebase';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            item : '',
            todos : [],
            loading : true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        let todoRef = firebase.database().ref('todos');
        todoRef.on('child_added', snapshot => {
            let todo = {
                id: snapshot.key,
                name: snapshot.val().name,
                is_complete: snapshot.val().is_complete,
            };
            this.setState({
                todos: [todo].concat(this.state.todos),
                loading: false
            });
            // console.log(this.state.todos);
        }).bind(this);
    }

    handleChange(event){
        this.setState({
            item : event.target.value
        });

        console.log('onsubmit');
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

                    </div>
                </div>
                <div className="col-md-12">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Todo;

