import { all } from "redux-saga/effects";
import addToCartS from "./addtocart";
import listAll from "./listcart";
import removeToCartS from "./removeCart";

export default function* rootSaga() {
    yield all([
        listAll(),
        addToCartS(),
        removeToCartS()
    ])
}