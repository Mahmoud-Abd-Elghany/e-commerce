import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase/firebase.utils'

function App(props) {
  const [state, setState] = useState({currentUser: null});
  const unsubscribe = null;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setState({currentUser: user})
      console.log(user);
    });
  },[]);

  return (
    <div className="App">
      <Header currentUser = {state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
