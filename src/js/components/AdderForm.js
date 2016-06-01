import React from 'react';

class AdderForm extends React.Component {
    render() {
		const { onSubmit, onChange, value } = this.props;

    	return (
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input className="form-control" onChange={onChange} value={value} />
                </div>
            </form>
    	);
    }
}

export default AdderForm;
