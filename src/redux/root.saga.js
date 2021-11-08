import { all, call } from "@redux-saga/core/effects";
import { fetchDataStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.saga";

function* rootSaga(){
    yield all([call(fetchDataStart), call(userSagas)])
}

export default rootSaga