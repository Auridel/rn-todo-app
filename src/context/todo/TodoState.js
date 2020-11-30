import React, {useReducer, useContext} from "react";
import {Alert} from "react-native";
import {todoReducer} from "./todoReducer";
import {TodoContext} from "./TodoContext";
import {Service} from "../../Service";
import {
    ADD_TODO,
    GET_TODOS,
    HIDE_ERROR,
    SHOW_ERROR,
    SHOW_LOADER,
    HIDE_LOADER,
    DELETE_TODO,
    UPDATE_TODO
} from "../actionTypes";
import {ScreenContext} from "../screen/ScreenContext";

export const TodoState = ({children}) => {
    const {changeScreen} = useContext(ScreenContext);

    const initialState = {
        todos: [],
        loading: false,
        error: false
    }
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const showLoader = () => {
        dispatch({type: SHOW_LOADER});
    }
    const hideLoader = () => {
        dispatch({type: HIDE_LOADER});
    }
    const showError = () => {
        dispatch({type: SHOW_ERROR});
    }
    const hideError = () => {
        dispatch({type: HIDE_ERROR});
    }

    const addTodo = async (title) => {
        try {
            const res = await Service.addTodo(title);
            const id = res.name;
            dispatch({type: ADD_TODO, title, id})
        }catch (e) {
            showError();
        }
    }

    const getTodos = async () => {
        hideError();
        showLoader();
        try {
            const res = await Service.getTodos()
            const todos = Object.keys(res).map(id => {
                return {
                    id,
                    ...res[id]
                }
            })
            dispatch({type: GET_TODOS, todos});
        }catch (e) {
            showError();
        }finally {
            hideLoader();
        }
    }

    const deleteTodo = async (id) => {
        try {
            Alert.alert(
                "Delete Todo",
                `Do you really want to delete ${state.todos.find(t => t.id === id).title}?`,
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { text: "Delete", onPress: async () => {
                            await Service.deleteTodo(id);
                            changeScreen(null);
                            dispatch({type: DELETE_TODO, id});
                    }}
                ],
                { cancelable: false }
            );

        }catch (e) {
            showError();
        }
    }

    const updateTodo = async (id, title) => {
        try{
            await Service.updateTodo(id, title);
            dispatch({type: UPDATE_TODO, id, title});
        }catch (e) {
            showError();
        }
    }

    return (
        <TodoContext.Provider value={
            {
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                getTodos,
                addTodo,
                deleteTodo,
                updateTodo
            }
        }>{children}</TodoContext.Provider>
    )
}