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
import { checkUserSession } from './redux/user/user.actions';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import SignUpPage from './pages/signup/signup.component';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  const currentUser = useSelector(state => currentUserSelector(state));
  return (
    <PayPalScriptProvider options={{"client-id": "ASYQWlCoOo2wwZkAiTsqnQ7JXOq_fnQS2GBTd4aTBOfo9lrvmGpVgm4fVScd_FWjuLszTNci3jwZsXcU"}}>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' render = {() => currentUser? <Redirect to="/"/> : (<SignInPage/>)}/>
          <Route path='/signup' render = {() => currentUser? <Redirect to="/"/> : (<SignUpPage/>)}/>
          <Route exact path='/checkout' component = {CheckoutPage}/>
        </Switch>
      </div>
    </PayPalScriptProvider>
    
  );
}

export default App;
