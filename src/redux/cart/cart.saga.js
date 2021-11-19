import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { clearCart } from './cart.actions'

function* clearCartOnSignOut(){
    yield put(clearCart());
}

function* onSignOutSuccess(){
    yield takeLatest('SIGN_OUT_SUCCESS', clearCartOnSignOut)
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess)]);
}