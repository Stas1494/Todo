import React from 'react';
import {observer} from "mobx-react-lite";
import store from "../../store/store";
import './todoAdd.scss'


const TodoAdd = observer(() => {
    return (
        <div className={'form'}>
            <input
                className={'form__input'}
                type="text"
                value={store.newTodo}
                onChange={e => store.newTodo = e.target.value}
            />
            <button className={'form__btn'} onClick={() => store.addTodo()}>Добавить задачу</button>
        </div>
    );
});

export default TodoAdd;