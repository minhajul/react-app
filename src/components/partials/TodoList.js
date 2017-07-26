import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <ul className="todo-list">
                {this.props.items.map(item => (
                    <li key={item.id}>
                        <input className="item" key={item.id} type="checkbox" name="text" defaultChecked={item.isComplete} />{item.name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default TodoList;