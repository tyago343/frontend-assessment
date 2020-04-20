import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";


export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

