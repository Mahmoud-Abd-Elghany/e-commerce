import { convertDocsArrToObj, db } from '../../firebase/firebase.utils'
import { collection, onSnapshot } from '@firebase/firestore'

export const fetchShopDataStart = () => ({
    type: 'FETCH_DATA_START',
})

export const fetchShopDataSuccess = fetchedData => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: fetchedData,
});

export const fetchShopDataFailure = errorMsg => ({
    type: 'FETCH_DATA_FAILURE',
    payload: errorMsg,
});

export const fetchShopDataStartAsync = () => { 
    return (dispatch) => {
        const collectionRef = collection(db, 'Shop Data');
        dispatch(fetchShopDataStart());
        onSnapshot(collectionRef, async snapShot => {
            const fetchedShopData = await convertDocsArrToObj(snapShot);
            dispatch(fetchShopDataSuccess(fetchedShopData));
        }, error => { dispatch(fetchShopDataFailure(error))})
    }
};