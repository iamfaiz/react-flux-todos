import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/Card';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import AdderForm from './components/AdderForm';
import TodoList from './components/TodoList';
import AllDone from './components/AllDone';
import Footer from './components/Footer';

import TodoStore from './stores/TodoStore';
import * as TodoActions from './actions/TodoActions';

class TodosApp extends React.Component {
    constructor() {
        super();

        this.state = {
        	todoText: '',
        	todos: TodoStore.getAll()
        };
    }

    componentWillMount() {
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll()
            });
        });
    }

    handleFormSubmit(event) {
    	event.preventDefault();

        TodoActions.addNew(this.state.todoText);

        this.clearInput();
    }

    handleInputChange(event) {
        this.setState({
            todoText: event.target.value
        });
    }

    toggleCompleted(event) {
        event.preventDefault();

        const todoId = event.target.parentNode.attributes['data-id'].value;

        TodoActions.toggleComplete(todoId);
    }

    clearAll(event) {
        event.preventDefault();

        TodoActions.clearAll();
    }

    clearCompleted(event) {
        event.preventDefault();

        TodoActions.clearCompleted();
    }

    clearInput() {
        this.setState({
            todoText: ''
        });
    }

    render() {
        const { todos, todoText } = this.state;
        const { handleFormSubmit, handleInputChange, toggleCompleted, clearCompleted, clearAll } = this;

    	return (
    		<Card>
                <CardHeader>Todos Application</CardHeader>
                    <CardBody>
                        <AdderForm
                            onSubmit={handleFormSubmit.bind(this)}
                            onChange={handleInputChange.bind(this)}
                            value={todoText} />

                        <TodoList todos={todos} onToggle={toggleCompleted.bind(this)} />

                        <AllDone displayWhen={todos.length} />

                        <Footer
                            todos={todos}
                            clearCompleted={clearCompleted.bind(this)}
                            clearAll={clearAll.bind(this)} />

                    </CardBody>
    		</Card>
    	);
    }
}

ReactDom.render(<TodosApp />, document.getElementById('app'));