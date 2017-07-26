import React, { Component } from 'react';
import Header from "../partials/Header";
import TodoList from "../partials/TodoList";
import {TodoForm} from "../partials/TodoForm";
import Footer from "../partials/Footer";

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items : [
                {
                    id: 1,
                    name : 'PHP',
                    isComplete : true
                },
                {
                    id: 2,
                    name : 'Laravel',
                    isComplete : false
                },
                {
                    id: 3,
                    name : 'Javascript',
                    isComplete : true
                },
                {
                    id: 4,
                    name : 'Python',
                    isComplete : false
                },
            ],
            text : ''
        }
    }

    handleChange(event){
        this.setState({
            text : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        let newItem = {
            name : this.state.text,
            id : Date.now()
        };

        this.setState({
            items : this.state.items.concat(newItem),
            text : ''
        })
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="col-md-12">
                    <div className="todo-list">
                        <h3>TODO LIST</h3>

                        <TodoList items={this.state.items}/>

                        <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} list={ this.state.text }/>

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

