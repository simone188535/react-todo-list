import React from 'react';

class Edit extends React.Component {


    selectThisItem = () => {
        console.log(this.props);
    }

    render() {
        return (
            <button className="btn bg-primary text-white mx-1" onClick={this.selectThisItem}>
                <div>Edit</div>
            </button>
        );
    }
}
export default Edit;