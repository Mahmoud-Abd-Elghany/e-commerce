import { all, call } from "@redux-saga/core/effects";
import { cartSagas } from "./cart/cart.saga";
import { fetchDataStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.saga";

function* rootSaga(){
    yield all([call(fetchDataStart), call(userSagas), call(cartSagas)])
}

export default rootSaga