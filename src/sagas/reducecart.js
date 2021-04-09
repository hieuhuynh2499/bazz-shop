import { takeLatest, put, call } from "redux-saga/effects";
import { reducetocartFaild, reducetocartSuccess } from "../actions/reduceCart";
import { fetchProduct } from "../untils/apiaxios";


function* reduceToCart(action) {
    try {
        let data = yield call(fetchProduct, action.id);
        if (data.data.id === action.id) {
            console.log("test");
            yield put(reducetocartSuccess(data.data));
        }
    } catch (e) {
        console.log(e);
        yield put(reducetocartFaild());
    }
}

export default function* reduceToCartS() {
    yield takeLatest('REDUCE_TO_CART_REQUEST', reduceToCart)
}