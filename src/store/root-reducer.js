import { useReducer } from "react";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    user: useReducer,
})