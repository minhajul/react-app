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
        let _this = this;
        todoRef.on('child_added', snapshot => {
            let todo = { name: snapshot.val().name, id: snapshot.key };
            _this.setState({
                todos: [todo].concat(_this.state.todos),
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
        });

        this.setState({
            item : '',
        })
    }

    render() {
        if (this.state.loading){
            return(
                <div className="container">
                    <h2>Loading......</h2>
                </div>
            )
        }
        return (
            <div className="container">
                <Header/>
                <div className="col-md-12">
                    <div className="todo-list">
                        <h3>TODO LIST</h3>

                        <TodoList todos={this.state.todos}/>

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

