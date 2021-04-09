import { combineReducers } from "redux";
import addtocartReducer from "./addtocart";
import cartReducer from "./cart";




const rootReducer = combineReducers({
    cart: cartReducer,
    addtocart: addtocartReducer,
});



export default rootReducer;