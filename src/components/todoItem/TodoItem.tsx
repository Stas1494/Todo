import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";

import store from '../../store/store'
import './todoItem.scss'

const TodoItem = observer(() => {
    useEffect(() => {
        store.filteredTodos = store.todos
    }, [store.todos])

    return (
        <div>
            {store.filteredTodos.map(todo =>
                <div className={'todo'} key={todo.id}>
                    <input
                        className={'todo__checkbox'}
                        onChange={() => store.completeTodo(todo.id)}
                        type="checkbox"
                        checked={todo.completed}
                    />
                    <div className={'todo__title'}>{todo.title}</div>
                    <button className={'todo__btn'} onClick={() => store.deleteTodo(todo.id)}>Удалить</button>
                </div>
            )}
        </div>
    );
});

export default TodoItem;