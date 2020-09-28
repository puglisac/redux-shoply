import { combineReducers } from "redux";
import items from "./items";
import shoppingCart from "./shoppingCart";
import total from "./total";

const rootReducer = combineReducers({ items, shoppingCart, total });

export default rootReducer;
