import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import { setCurrentUserAction } from './redux/user/user.actions';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component'
import {onAuthStateChanged} from 'firebase/auth'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {onSnapshot } from "firebase/firestore";
import { currentUserSelector } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';

function App(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => currentUserSelector(state));
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
        setCurrentUser(userAuth);
      } //Signing out the User

    });
  },[]);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' render = {() => currentUser? <Redirect to="/"/> : (<SignInPage/>)}/>
        <Route exact path='/checkout' component = {CheckoutPage}/>
      </Switch>
    </div>
  );
}


export default App;
