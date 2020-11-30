import React, {useReducer} from "react";
import {screenReducer} from "./screenReducer";
import {CHANGE_SCREEN} from "../actionTypes";
import {ScreenContext} from "./ScreenContext";

export const ScreenState = ({children}) => {
    const [state, dispatch] = useReducer(screenReducer, null);

    const changeScreen = (id) => {
        dispatch({type: CHANGE_SCREEN, id})
    }

    return (
        <ScreenContext.Provider value={
            {
                todoId: state,
                changeScreen
            }
        }>{children}</ScreenContext.Provider>
    )
}