import { takeLatest, put, call } from "redux-saga/effects";
import { cartSuccess, cartFaild } from '../actions/cart';



function* fetchListAllTest(action) {
    try {

        if (action.type === 'CART_REQUEST') {
            const dataListAllTest = yield call('https://60065ad43698a80017de165e.mockapi.io/ListsProductist');
            console.log(dataListAllTest);
        }
        if (dataListAllTest.status === 200) {
            yield put(cartSuccess());
        }
    } catch (e) {
        console.log(e);
        yield put(cartFaild())
    }
}

export default function* listAllTest() {
    yield takeLatest(LIST_ALL_TEST_REQUEST, fetchListAllTest)
}