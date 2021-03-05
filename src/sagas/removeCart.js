import { takeLatest, put, call } from "redux-saga/effects";

import { removecartFaild, removecartSuccess } from "../actions/removeCart";
import { fetchProduct } from "../untils/apiaxios";


function* removeToCart(action) {
    try {
        let dataListAllTest = yield call(fetchProduct, action.id);
        console.log(dataListAllTest);
        console.log("remove");
        if (dataListAllTest.data.id === action.id) {
            yield put(removecartSuccess(dataListAllTest.data));
        }
    } catch (e) {
        console.log(e);
        yield put(removecartFaild())
    }
}

export default function* removeToCartS() {
    yield takeLatest('REMOVE_CART_REQUEST', removeToCart)
}