export const toggleCart = () => ({
    type: 'TOGGLE_CART',
})

export const addItemToCart = item => ({
    type: 'ADD_ITEM_TO_CART',
    payload: item
})

export const removeItem = (itemID) => ({
    type: 'REMOVE_ITEM',
    payload: itemID
})
