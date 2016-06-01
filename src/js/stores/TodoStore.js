import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super();

		this.todos = [];
	}

	getAll() {
		return this.todos;
	}

	addNew(body) {
		this.todos.push({
			id: Date.now(),
			body,
			completed: false
		});

		this.emit('change');
	}

	toggleComplete(id) {
    	this.todos.forEach(todo => {
    		if ( todo.id == id )
    			todo.completed = !(todo.completed);
    	});

    	this.emit('change');
	}

	clearAll() {
		this.todos = [];

		this.emit('change');
	}

	clearCompleted() {
        const unCompletedTodos = this.todos.filter(todo => {
            return (todo.completed === false);
        });

        this.todos = unCompletedTodos;

        this.emit('change');
	}

	handleAction(action) {
		switch(action.type) {
			case 'ADD_TODO':
				this.addNew(action.body);

				break;

			case 'TOGGLE_COMPLETE':
				this.toggleComplete(action.id);

				break;

			case 'CLEAR_ALL':
				this.clearAll();

				break;

			case 'CLEAR_COMPLETED':
				this.clearCompleted();

				break;
		}
	}
}

const todoStore = new TodoStore;

// window.TodoStore = todoStore;
// window.dispatcher = dispatcher;

dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;