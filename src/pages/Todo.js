

import React, { Component } from 'react';
import Header from "../Header";
import TodoList from "../TodoList";
import Footer from "../Footer";

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {items: [], text: ''}
    }

    handleChange(event){
        this.setState({text: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        let newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState( ( prevState ) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }))
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="col-md-12">
                    <div className="todo-list">
                        <h3>TODO</h3>
                        <TodoList items={this.state.items}/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control" onChange={this.handleChange} value={this.state.text} required/>
                                <br/>
                                <button className="btn btn-primary">{'Add'}</button>
                            </div>
                        </form>
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

