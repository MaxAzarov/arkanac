import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import basket from "./basket";
import trending from "./trending";
import assortment from "./assortment";
import cards from "./cards";

const reducer = combineReducers({
  basket,
  trending,
  assortment,
  cards,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
