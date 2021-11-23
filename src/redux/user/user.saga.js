import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from "./user.actions";
import {auth, createUserProfileDocument, getCurrentUser, googleProvider} from '../../firebase/firebase.utils'
import { signInWithPopup } from "firebase/auth"
import { getDoc } from "firebase/firestore"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from "firebase/auth";

function* getSnapshotfromUserAuth(userAuth, additionalInfo){
    yield console.log(additionalInfo);
    const userRef = yield createUserProfileDocument(userAuth, additionalInfo);
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

function* userSignUp({payload: {email, password, displayName}}){
    try{
        const {user} = yield createUserWithEmailAndPassword(auth, email, password);
        yield getSnapshotfromUserAuth(user, {displayName})
        yield put(signUpSuccess());
    }
    catch(errMsg){
        yield put(signUpFailure(errMsg));
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

export function* onEmailSignUpStart(){
    yield takeLatest('SIGN_UP_START', userSignUp);
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onUserSignOut),
        call(onEmailSignUpStart)
    ])
}