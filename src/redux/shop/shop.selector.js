import {createSelector} from 'reselect'

const SHOP_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    men: 5
}

export const shopSelector = createSelector(
    [state => state],
    state => state.shop
)

export const collectionSelector = urlParam => (
    createSelector(
        [shopSelector],
        shopData => shopData.find(collection => collection.id === SHOP_ID_MAP[urlParam])
    )
)

