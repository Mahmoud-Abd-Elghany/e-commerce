const INITIAL_STATE = {
    shopData: null,
    isFetching: false,
    errorMsg: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_DATA_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                isFetching: false,
                shopData: action.payload
            }
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
            }
        default: return state;
    }
}

export default shopReducer