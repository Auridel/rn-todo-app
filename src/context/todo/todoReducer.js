import {
    ADD_TODO,
    DELETE_TODO,
    GET_TODOS,
    HIDE_ERROR,
    HIDE_LOADER,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO
} from "../actionTypes";


const handlers = {
    [GET_TODOS]: (state, {todos}) => ({...state, todos}),
    [ADD_TODO]: (state, {todo}) => ({...state, todos: [...state.todos, todo]}),
    [DELETE_TODO]: (state, {id}) => ({...state,
        todos: [...state.todos.filter(todo => todo.id !== id)]
    }),
    [UPDATE_TODO]: (state, {id, title}) => ({...state,
        todos: [...state.todos.map(todo => {
            if(todo.id === id) todo.title = title;
            return todo;
        })]
    }),
    [SHOW_LOADER]: state => ({...state, loader: true}),
    [HIDE_LOADER]: state => ({...state, loader: false}),
    [SHOW_ERROR]: state => ({...state, error: true}),
    [HIDE_ERROR]: state => ({...state, error: false}),
    DEFAULT: state => state
}

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}