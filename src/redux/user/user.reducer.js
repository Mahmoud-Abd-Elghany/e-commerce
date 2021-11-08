const INITIAL_STATE = {
    currentUser: null,
    errMsg: null
}
const userReducer = (currentState = INITIAL_STATE, action) => {
    switch(action.type){
        case "SIGN_IN_SUCCESS":
            return {
                ...currentState,
                currentUser: action.payload,
                errMsg: null,
            }
        case "SIGN_IN_FAILURE":
            return{
                ...currentState,
                errMsg: action.payload
            }
        default:
            return currentState;
    }
}

export default userReducer;