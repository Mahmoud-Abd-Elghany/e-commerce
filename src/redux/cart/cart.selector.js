import { createSelector } from "reselect"

export const cartItemsSelector = createSelector(
    [state => state],
    state => state.cart.cartItems
)

export const cartItemsTotalSelector = createSelector(
    [state => state.cart.cartItems],
    cartItems =>cartItems.reduce((total, item) => (total = total+ item.quantity), 0)
)

export const cartItemsTotalPriceSelector = createSelector(
    [state => state.cart.cartItems],
    cartItems =>cartItems.reduce((total, item) => (total = total + (item.price*item.quantity)), 0)
)


export const cartHiddenSelector = createSelector(
    [state => state.cart],
    cart => cart.hidden
)