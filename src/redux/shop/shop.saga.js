import { takeEvery, call, put } from 'redux-saga/effects'
import { convertDocsArrToObj, db } from '../../firebase/firebase.utils'
import { collection, getDocs } from '@firebase/firestore'
import {
    fetchShopDataSuccess,
    fetchShopDataFailure
} from './shop.actions'


function* fetchDataAsync(){
    try{
        const collectionRef = collection(db, 'Shop Data');
        const snapshot = yield getDocs(collectionRef);
        const fetchedData = yield call(convertDocsArrToObj, snapshot);
        yield put(fetchShopDataSuccess(fetchedData));
    }
    catch(e){
        yield put(fetchShopDataFailure(e.message))
    }
}

export function* fetchDataStart (){
    yield takeEvery('FETCH_DATA_START',fetchDataAsync)
}