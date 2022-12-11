import React from 'react';
import TodoItem from "../todoItem/TodoItem";
import './todoList.scss'

const TodoList = () => {
    return (
        <div className={'todos'}>
            <div className={'todos__title'}>Список задач</div>
            <TodoItem/>
        </div>
    );
};

export default TodoList;