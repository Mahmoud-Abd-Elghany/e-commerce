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

export const incQuantity = (itemID) => ({
    type: 'INCREASE_QUANTITY',
    payload: itemID
})

export const decQuantity = (itemID) => ({
    type: 'DECREASE_QUANTITY',
    payload: itemID
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})