import React from 'react';

class AllDone extends React.Component {
    render() {
    	const styles = {
            display: (this.props.displayWhen ? 'none' : 'block' ),
            marginTop: '20px'
    	};

    	return (
            <h6 className="text-muted" style={styles}>All Done!</h6>
    	);
    }
}

export default AllDone;
