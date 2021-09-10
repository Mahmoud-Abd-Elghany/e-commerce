import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleCart}  from '../../redux/cart/cart.actions'
import {ReactComponent as Cart} from "./shopping-bag.svg"
import './cart-icon.style.scss'


const CartIcon = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log("Called")
    let cartItemsTotal = 0;
    const cartItemCounter = cartItems.forEach(item => {
        cartItemsTotal = cartItemsTotal + item.quantity;
    });
    const dispatch = useDispatch();
    const dispatchToggleCart = () => dispatch(toggleCart());
    return (
        <div className='cart-container' onClick={dispatchToggleCart}>
            <div className='no'>{cartItemsTotal}</div>
            <Cart className = "cart"/>
        </div>
    )
}

export default CartIcon
