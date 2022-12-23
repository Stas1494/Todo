import {makeAutoObservable} from "mobx";

interface Todo {
    id: number,
    title: string,
    completed: boolean,
}


class Todos {

    todos: Todo [] = []

    newTodo: string = '';

    filteredTodos: Todo[] = this.todos

    constructor() {
        makeAutoObservable(this);
    }

    completeTodo(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    addTodo() {
        if (this.newTodo !== '') {
            this.todos = [...this.todos, {id: Date.now(), completed: false, title: this.newTodo}]
            this.newTodo = '';
        }
    }

    filterTodo(filter: string | boolean) {
        if (filter === 'All') {
            this.filteredTodos = this.todos;
        } else {
            this.filteredTodos = this.todos.filter(todo => todo.completed === filter)
        }
    }
}

const store = new Todos();
export default store;