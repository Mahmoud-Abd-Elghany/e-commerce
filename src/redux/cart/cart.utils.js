export const checkingDuplicateItem = (cartItems, newCartItem) => {
    const cartItemExists = cartItems.find( cartItem => newCartItem.id === cartItem.id);

    if(cartItemExists){
        const newCartItems = cartItems.map( cartItem => 
            cartItem.id === newCartItem.id?
                {...cartItem, quantity: cartItem.quantity+1}
                :
                cartItem
        )
        return newCartItems
    }
    return [...cartItems, {...newCartItem, quantity: 1}]
}