import React from 'react';
import SingleTodoItem from './TodoList/Single';

class TodoList extends React.Component {
    todoListItems() {
        const { todos } = this.props;

        return todos.map(this.renderSingleItem.bind(this));
    }

    renderSingleItem(item) {
        const { id } = item;
        const { onToggle } = this.props;

        return (
            <SingleTodoItem key={id} item={item} onToggle={onToggle} />
        );
    }

    render() {
    	return (
            <ul className="list-group">
                {this.todoListItems()}
            </ul>
    	);
    }
}

export default TodoList;
