import React from "react";
import {todoReducer} from "./todoReducer";
import {TodoContext} from "./TodoContext";

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
        loading: false,
        error: false
    }
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={
            {
                todos: state.todos,
                loading: state.loading,
                error: state.error
            }
        }>{children}</TodoContext.Provider>
    )
}