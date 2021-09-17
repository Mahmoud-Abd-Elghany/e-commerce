import { checkingDuplicateItem, inc_dec_Quantity, removeItem } from "./cart.utils"
const INITIAL_STATE = {
    hidden:true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'TOGGLE_CART':
            return {
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cartItems: checkingDuplicateItem(state.cartItems, action.payload)
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cartItems: inc_dec_Quantity(state.cartItems, action.payload, 'inc')
            }
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cartItems: inc_dec_Quantity(state.cartItems, action.payload,'dec')
            }
        default:
            return state;
    }
}

export default cartReducer