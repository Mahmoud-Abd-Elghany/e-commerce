import {createSelector} from 'reselect'


export const shopSelector = createSelector(
    [state => state.shop],
    shop => shop.shopData
)

export const fetchingStateSelector = createSelector(
    [state => state.shop],
    shop => shop.isFetching
)

export const isDataLoadedSelector = createSelector(
    [state => state.shop],
    shop => !!(shop.shopData) //changing value to Boelean
)

export const objToArrCollectionSelector = createSelector(
    [shopSelector],
    shopData => shopData? Object.keys(shopData).map(key => shopData[key]) : []
)

export const collectionSelector = urlParam => (
    createSelector(
        [shopSelector],
        shopData => shopData? shopData[urlParam] : null
    )
)

