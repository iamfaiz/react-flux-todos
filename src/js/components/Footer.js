import React from 'react';

class Footer extends React.Component {
	footerStyle() {
		return { marginTop: '30px' };
	}

	clearAllStyles() {
		return { display: (this.props.todos.length ? 'inline' : 'none') };
	}

	clearCompletedStyles() {
		return {
            display: (this.props.todos.length ? 'inline' : 'none'),
            marginLeft: '10px'
		};
	}

    render() {
    	const { clearAll, clearCompleted } = this.props;

    	return (
            <footer style={this.footerStyle()}>
                <a className="btn btn-primary" href="#" style={this.clearAllStyles()} onClick={clearAll}>
					Clear All
               	</a>
                <a className="btn btn-success" href="#" style={this.clearCompletedStyles()} onClick={clearCompleted}>
					Clear Completed
				</a>
            </footer>
    	);
    }
}

export default Footer;
