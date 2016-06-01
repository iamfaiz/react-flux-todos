import React from 'react';

class CardHeader extends React.Component {
    render() {
    	return (
    		<div className="card-header">
    			{this.props.children}
    		</div>
    	);
    }
}

export default CardHeader;
