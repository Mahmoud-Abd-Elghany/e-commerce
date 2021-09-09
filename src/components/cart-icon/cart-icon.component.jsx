import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleCart}  from '../../redux/cart/cart.actions'
import {ReactComponent as Cart} from "./shopping-bag.svg"
import './cart-icon.style.scss'


const CartIcon = () => {
    const dispatch = useDispatch();
    const dispatchToggleCart = () => dispatch(toggleCart());
    return (
        <div className='cart-container' onClick={dispatchToggleCart}>
            <div className='no'>0</div>
            <Cart className = "cart"/>
        </div>
    )
}

export default CartIcon
