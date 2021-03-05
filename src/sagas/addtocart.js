import { takeLatest, put, call } from "redux-saga/effects";
import { addtocartSuccess, addtocartFaild } from '../actions/addtocart';
import { fetchProduct } from "../untils/apiaxios";


function* addToCart(action) {
    try {
        let data = yield call(fetchProduct, action.id);


        if (data.data.id === action.id) {
            yield put(addtocartSuccess(data.data));
        }
    } catch (e) {
        console.log(e);
        yield put(addtocartFaild())
    }
}

export default function* addToCartS() {
    yield takeLatest('ADD_TO_CART_REQUEST', addToCart)
}