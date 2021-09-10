import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { useSelector } from 'react-redux'
import './cart-dropdown.style.scss'

const CartDropdown = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.map( item => <CartItem key={item.id} item = {item}/>)
            }
            </div>
            <CustomButton className='button'>Go to checkout</CustomButton>
        </div>
    )
}

export default CartDropdown
