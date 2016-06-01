import dispatcher from '../dispatcher';

export function addNew(body) {
	dispatcher.dispatch({
		type: 'ADD_TODO',
		body
	});
}

export function toggleComplete(id) {
	dispatcher.dispatch({
		type: 'TOGGLE_COMPLETE',
		id
	});
}

export function clearAll() {
	dispatcher.dispatch({
		type: 'CLEAR_ALL'
	});
}

export function clearCompleted() {
	dispatcher.dispatch({
		type: 'CLEAR_COMPLETED'
	});
}