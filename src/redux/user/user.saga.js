import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { signInSuccess, signInFailure } from "./user.actions";
import {auth, createUserProfileDocument, googleProvider} from '../../firebase/firebase.utils'
import { signInWithPopup } from "firebase/auth"
import { getDoc } from "firebase/firestore"
import { signInWithEmailAndPassword } from 'firebase/auth'

function* getSnapshotfromUserAuth(user){
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield call(getDoc, userRef);
    const userData = {id: userSnapshot.id, ...userSnapshot.data()};
    return userData
}

function* signInWithGoogle(){
    try{
        const {user} = yield call(signInWithPopup, auth, googleProvider);
        const userData = yield call(getSnapshotfromUserAuth, user);
        yield put(signInSuccess(userData));
    } catch(error){
        yield put(signInFailure(error))
    }
}

function* signInWithEmail({payload: {email, password}}){
    try{
        const {user} = yield signInWithEmailAndPassword(auth, email, password);
        const userData = yield call(getSnapshotfromUserAuth, user);
        yield put(signInSuccess(userData));
    } catch(error){
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest('EMAIL_SIGN_IN_START',signInWithEmail);
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}