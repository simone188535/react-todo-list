import React from 'react';
import { connect } from 'react-redux';

class DisplayList extends React.Component {

    manageList = () => {

        // if no results display text
        // const { id, description } = this.props.todoListState;
        // console.log(this.props.todoListState);

        return (this.props.todoListState.map(x =>
            [x].map(item => <li key={item.id}>{item.description}</li>)
        ));
        // console.log(this.props);

        // const listItems= this.props.todoListState.map(x =>{
        //     [x].map((item) => {
        //         // allDescriptions= item.description;
        //         allDescriptions=  <li key={item.id}>{item.description}</li>

        //     });
        // });
    }
    render() {

        return (
            <div>
                <div>test</div>
                <div><ul>{this.manageList()}</ul></div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        todoListState: state.todoList.payload
    }
}

export default connect(mapStateToProps)(DisplayList);