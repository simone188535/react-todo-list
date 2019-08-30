import React from 'react';
import { connect } from 'react-redux';

import Edit from './Edit';
import Delete from './Delete';

class DisplayList extends React.Component {


    manageList = () => {

        const todoListState = this.props.todoListState;
        // const todoListCount = todoListState.length;
        let ListResult = '';


        // if (todoListCount < 1) {
        //     return ListResult = <div>Sorry, There are no List Items</div>;
        // }
        ListResult = todoListState.map(x =>
            [x].map(item =>
                <li key={item.id} className="list-group-item">
                    <div>{item.description}</div>

                    <div className="float-right">
                        <Edit listId={item.id} />
                        <Delete listId={item.id}/>
                    </div>
                </li>)
        );

        return (ListResult);

    }
    render() {

        return (
            <div className="w-100">
                <ul className="list-group">
                    {this.manageList()}
                </ul>
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