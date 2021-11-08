export const setCurrentUserAction = user => ({
    type: "SET_CURRENT_USER",
    payload: user,
})

export const googleSignInStart = user => ({
    type: "GOOGLE_SIGN_IN_START"
})

export const emailSignInStart = userCredentials => ({
    type: "EMAIL_SIGN_IN_START",
    payload: userCredentials
})

export const signInSuccess = user => ({
    type: "SIGN_IN_SUCCESS",
    payload: user
})
export const signInFailure = error => ({
    type: "SIGN_IN_Failure",
    payload: error
})


