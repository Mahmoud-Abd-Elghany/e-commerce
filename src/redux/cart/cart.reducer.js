import { checkingDuplicateItem } from "./cart.utils"
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
        default:
            return state;
    }
}

export default cartReducer