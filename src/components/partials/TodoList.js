import React, {Component} from 'react';

class TodoList extends Component {
    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map(todo => (
                    <li key={todo.id}>
                        <input className="item" key={todo.id} type="checkbox" name="text"/>{todo.name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default TodoList;
