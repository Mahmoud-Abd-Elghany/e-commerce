import { createSelector } from "reselect"

export const cartItemsSelector = createSelector(
    [state => state],
    state => state.cart.cartItems
)

export const cartItemsTotalSelector = createSelector(
    [state => state.cart.cartItems],
    cartItems =>cartItems.reduce((total, item) => (total = total+ item.quantity), 0)
)