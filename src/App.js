import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component'
import {onAuthStateChanged} from 'firebase/auth'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { doc, onSnapshot } from "firebase/firestore";

function App(props) {
  const [state, setState] = useState({currentUser: null});
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
            const userData = snapShot.data();
            setState({
              currentUser: {
                id: snapShot.id,
                ...userData
              }
            })
          }
        ); //Attaches a listener for DocumentSnapshot events
        history.push('/');
      }
      else{
        setState({
          currentUser: userAuth
        })
        //history.push('/');
      } //Signing out the User

    });
  },[]);

  console.log("current User:", state.currentUser);
  console.log("auth:", auth);
  return (
    <div className="App">
      <Header currentUser = {state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
