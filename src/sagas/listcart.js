import { takeLatest, put, call } from "redux-saga/effects";
import { cartSuccess, cartFaild } from '../actions/cart';
import { requestGetUser } from "../servicesAPI/axios";


function* fetchProducts() {
    try {
        let data = yield call(requestGetUser);
        if (data.status === 200) {
            yield put(cartSuccess(data.data));
        }
    } catch (e) {
        console.log(e);
        yield put(cartFaild())
    }
}

export default function* listAll() {
    yield takeLatest('CART_REQUEST', fetchProducts)
}