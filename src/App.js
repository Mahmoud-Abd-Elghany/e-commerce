import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import { setCurrentUserAction } from './redux/user/user.actions';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component'
import {onAuthStateChanged} from 'firebase/auth'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { doc, onSnapshot } from "firebase/firestore";

function App(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const setCurrentUser = user => dispatch(setCurrentUserAction(user));

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
            const userData = snapShot.data();
            setCurrentUser({
                id: snapShot.id,
                ...userData
              }
            )
          }
        ); //Attaches a listener for DocumentSnapshot events
      }
      else{
        setCurrentUser(userAuth)
      } //Signing out the User

    });
  },[]);

  console.log("auth:", auth);
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route path='/signin' render = {() => currentUser? <Redirect to="/"/> : (<SignInPage/>)}/>
      </Switch>
    </div>
  );
}


export default App;
