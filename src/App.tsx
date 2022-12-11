import React from 'react';
import TodoList from "./components/todoList/TodoList";
import TodoAdd from "./components/todoAdd/TodoAdd";
import TodoFilter from "./components/todoFilter/TodoFilter";

import "./style/App.scss"

function App() {

    return (
        <div className="App">
            <h1>To-Do</h1>
            <TodoAdd/>
            <TodoFilter/>
            <TodoList/>
        </div>
    );
}

export default App;
