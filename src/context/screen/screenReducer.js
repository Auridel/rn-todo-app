import {CHANGE_SCREEN} from "../actionTypes";

const handlers = {
    [CHANGE_SCREEN]: (state, {id}) => id,
    DEFAULT: state => state
}

export const screenReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}