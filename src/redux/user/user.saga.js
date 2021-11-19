import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from "./user.actions";
import {auth, createUserProfileDocument, getCurrentUser, googleProvider} from '../../firebase/firebase.utils'
import { signInWithPopup } from "firebase/auth"
import { getDoc } from "firebase/firestore"
import { signInWithEmailAndPassword } from 'firebase/auth'

function* getSnapshotfromUserAuth(user){
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield call(getDoc, userRef);
    const userData = {id: userSnapshot.id, ...userSnapshot.data()};
    yield put(signInSuccess(userData));
}

function* signInWithGoogle(){
    try{
        const {user} = yield call(signInWithPopup, auth, googleProvider);
        yield call(getSnapshotfromUserAuth, user);
    } catch(error){
        yield put(signInFailure(error))
    }
}

function* signInWithEmail({payload: {email, password}}){
    try{
        const {user} = yield signInWithEmailAndPassword(auth, email, password);
        yield call(getSnapshotfromUserAuth, user);
    } catch(error){
        yield put(signInFailure(error));
    }
}

function* userSignOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure(error));
    }
    
}

function* isUserAuth(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield call(getSnapshotfromUserAuth, userAuth);
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* onUserSignOut(){
    yield takeLatest('SIGN_OUT_START', userSignOut);
}

export function* onCheckUserSession(){
    yield takeLatest('CHECK_USER_SESSION', isUserAuth);
}

export function* onGoogleSignInStart(){
    yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest('EMAIL_SIGN_IN_START',signInWithEmail);
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onUserSignOut),
    ])
}