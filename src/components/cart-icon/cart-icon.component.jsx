import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleCart}  from '../../redux/cart/cart.actions'
import {ReactComponent as Cart} from "./shopping-bag.svg"
import './cart-icon.style.scss'
import { cartItemsTotalSelector } from '../../redux/cart/cart.selector'


const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemsTotal = useSelector(state => cartItemsTotalSelector(state));
    return (
        <div className='cart-container' onClick={() => dispatch(toggleCart())}>
            <div className='no'>{cartItemsTotal}</div>
            <Cart className = "cart"/>
        </div>
    )
}

export default CartIcon
