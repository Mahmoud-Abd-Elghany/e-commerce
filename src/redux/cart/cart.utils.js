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

export const removeItem = (cartItems, itemID) => {
    const newCartItems = cartItems.map((item) => {
        if(item.id !== itemID) {return item;}
        return{
            ...item,
            quantity: item.quantity -1
        }
    })
    const filteredCartItems = newCartItems.filter(item => item.quantity > 0);
    return filteredCartItems
}