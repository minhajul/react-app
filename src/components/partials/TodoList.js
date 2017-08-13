import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';

class TodoList extends Component {
    handleIsComplete(key){
        const singleTodo = firebase.database().ref('todos/' + key);
        let [name, is_complete] = ['', false];
        singleTodo.on('value', snapshot => {
            name = snapshot.val().name;
            is_complete = snapshot.val().is_complete !== true;
        });
        singleTodo.set({
            name: name,
            is_complete: is_complete
        })
    }

    render() {
        if (this.props.loading){
            return(
                <h3>Loading......</h3>
            )
        }
        return (
            <div>
                <h3>TODO LIST</h3>
                <ul className="todo-list">
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>
                            <input
                                className="item"
                                name="text"
                                type="checkbox"
                                onClick={this.handleIsComplete.bind(this, todo.id)}
                                key={todo.id}
                                defaultChecked={todo.is_complete} />{todo.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array,
    loading: PropTypes.bool
};

export default TodoList;
