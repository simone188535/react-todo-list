import React from 'react';
import TodoList from './TodoList';
import DisplayList from './DisplayList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                    <TodoList />
                    <DisplayList />
            </div>
        </div>
    );
}

export default App;