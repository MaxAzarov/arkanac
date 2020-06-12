import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cart from "./cart";

const reducer = combineReducers({
  cart,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
