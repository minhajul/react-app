import React, { Component } from 'react';
import Header from "../partials/Header";
import TodoList from "../partials/TodoList";
import {TodoForm} from "../partials/TodoForm";
import Footer from "../partials/Footer";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/actionCreator';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            item : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        // const todos = [];
        // const todoRef = firebase.database().ref('todos');
        // todoRef.on('child_added', snapshot => {
        //     let todo = {
        //         id: snapshot.key,
        //         name: snapshot.val().name,
        //         is_complete: snapshot.val().is_complete,
        //     };
        //     todos.push(todo);
        //     this.setState({
        //         todos: todos,
        //         loading: false
        //     });
        // });
    }

    handleChange(event){
        this.setState({
            item : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let todo = {
            id: Math.random(),
            name: this.state.item,
            is_complete : true
        };

        this.props.actions.addTodo(
            todo
        );

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
                            todos={this.props.todos}
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

function mapStateToProps(state) {
    return { todos : state.todos }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

