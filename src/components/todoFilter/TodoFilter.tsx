import React from 'react';
import store from "../../store/store";
import './todoFilter.scss'

const TodoFilter = () => {
    return (
        <div className={'filter'}>
            <button className={'filter__btn'} onClick={() => {
                store.filterTodo('All')
            }}>Все
            </button>
            <button className={'filter__btn'} onClick={() => store.filterTodo(true)}>Выполненые</button>
            <button className={'filter__btn'} onClick={() => store.filterTodo(false)}>Невыполненые</button>
        </div>
    );
};

export default TodoFilter;