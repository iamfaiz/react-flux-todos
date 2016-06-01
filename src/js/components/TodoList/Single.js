import React from 'react';

class Single extends React.Component {
    render() {
        const { onToggle, item } = this.props;
        const { id, body, completed } = item;
        const todoBodyStyle = { textDecoration: (completed ? 'line-through' : 'none') };


    	return (
            <li className="list-group-item" key={id} data-id={id}>
                <span style={todoBodyStyle}>{body} </span>
                <a href="#" onClick={onToggle}>Toggle Done</a>
            </li>
    	);
    }
}

export default Single;
