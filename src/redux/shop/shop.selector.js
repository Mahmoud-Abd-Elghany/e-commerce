import {createSelector} from 'reselect'


export const shopSelector = createSelector(
    [state => state],
    state => state.shop
)

export const objToArrCollectionSelector = createSelector(
    [shopSelector],
    shopData => Object.keys(shopData).map(key => shopData[key])
)

export const collectionSelector = urlParam => (
    createSelector(
        [shopSelector],
        shopData => shopData[urlParam]
    )
)

