import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component'
import { currentUserSelector } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  const currentUser = useSelector(state => currentUserSelector(state));
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
