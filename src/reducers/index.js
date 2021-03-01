import { combineReducers } from "redux";
import cartReducer from "./cart";



const rootReducer = combineReducers({
    addtocart: cartReducer
});



export default rootReducer;