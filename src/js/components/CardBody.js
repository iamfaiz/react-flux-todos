import React from 'react';

class CardBody extends React.Component {
    render() {
    	return (
    		<div className="card-block">
    			<div className="card-text">
    				{this.props.children}
    			</div>
    		</div>
    	);
    }
}

export default CardBody;
