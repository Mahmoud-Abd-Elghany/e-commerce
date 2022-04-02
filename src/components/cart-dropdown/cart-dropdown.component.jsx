import React from 'react'
import './cart-dropdown.style.scss'
import { useSelector, useDispatch } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { cartItemsSelector } from '../../redux/cart/cart.selector'
import { Link } from 'react-router-dom'
import { toggleCart } from '../../redux/cart/cart.actions'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const dispatchToggleCart = () => dispatch(toggleCart());
    const cartItems = useSelector(state => cartItemsSelector(state));
    return (
        <div className='cart-dropdown'>
            {
                cartItems.length?
                    <div className='cart-items'>
                    {
                     cartItems.map( item => <CartItem key={item.id} item = {item}/>)
                    }
                    </div>
                    :
                    <span className= "msg">You haven't picked an item yet</span>

            }
            

            <Link className='checkout-Btn-container' to="/checkout">
                <CustomButton sx={{display: "flex", width: "100%"}} onClick={dispatchToggleCart}>
                    <span style={{marginRight:"auto"}}> Checkout </span><ShoppingCartCheckoutIcon style={{color: "rgb(0, 132, 255)"}}/>
                </CustomButton>
            </Link>
        </div>
    )
}

export default CartDropdown
