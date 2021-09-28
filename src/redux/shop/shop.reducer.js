const INITIAL_STATE = {
    shopData: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'UPDATE_SHOP_DATA':
            return {
                ...state,
                shopData: action.payload
            }
        default: return state;
    }
}

export default shopReducer