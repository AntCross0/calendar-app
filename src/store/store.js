import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


import { rootReducer } from "../reducers/rootReducer";



export const store = configureStore({
    reducer: { rootReducer, middleware: { middleware1: applyMiddleware(thunk) } }
}
)   