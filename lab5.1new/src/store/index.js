import { applyMiddleware, createStore } from "redux";
import x from "./reducers/counterReducer";
import thunk from "redux-thunk";



export const store = createStore(x, applyMiddleware(thunk));